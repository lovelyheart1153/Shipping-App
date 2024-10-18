"use server";

import { redirect } from "next/navigation";
import { getSession } from "./session";
import { RouteFormData, RouteSchema } from "@/schemas/route";
import prisma from "@/prisma/client";
import { revalidatePath } from "next/cache";

export const createRoute = async (values: RouteFormData, id: string) => {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/login");

  const validation = RouteSchema.safeParse(values);
  if (!validation.success) throw new Error(validation.error.errors[0].message);

  const { arrivalDate, expectedArrivalDate, location, status, message } =
    validation.data;

  const route = await prisma.route.create({
    data: {
      shippmentId: id,
      arrivalDate,
      expectedArrivalDate,
      location,
      message,
      status,
    },
  });

  if (!route) throw new Error("Unable to create route.");

  revalidatePath(`/dashboard/shippment/${id}`);

  redirect(`/dashboard/shippment/${id}`);
};

export const updateRoute = async (values: RouteFormData, routeId: string) => {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/login");

  const validation = RouteSchema.safeParse(values);
  if (!validation.success) throw new Error(validation.error.errors[0].message);

  const routeExist = await prisma.route.findFirst({
    where: { id: routeId },
  });
  if (!routeExist) throw new Error("Invalid route ID");

  const route = await prisma.route.update({
    where: { id: routeExist.id },
    data: { shippmentId: routeExist.shippmentId, ...values },
  });

  if (!route) throw new Error("Unable to update route!");

  revalidatePath(`/dashboard/shippment/${route.shippmentId}`);

  redirect(`/dashboard/shippment/${route.shippmentId}`);
};

export const deleteRoute = async (routeId: string) => {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/login");

  const routeExist = await prisma.route.findFirst({
    where: { id: routeId },
  });
  if (!routeExist) throw new Error("Invalid route ID");

  const route = await prisma.route.delete({
    where: { id: routeId },
  });
  if (!route) throw new Error("Unable to delete route");

  revalidatePath(`/dashboard/shippment/${route.shippmentId}`);

  redirect(`/dashboard/shippment/${route.shippmentId}`);
};
