"use server";

import { ShippmentFormData, ShippmentSchema } from "@/schemas/shippment";
import { getSession } from "./session";
import { redirect } from "next/navigation";
import prisma from "@/prisma/client";
import { generateTrackingNumber } from "@/lib/utils";
import { revalidatePath } from "next/cache";

export const createShippment = async (values: ShippmentFormData) => {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/login");

  const validation = ShippmentSchema.safeParse(values);
  if (!validation.success) throw new Error(validation.error.errors[0].message);

  const trackingNumber = generateTrackingNumber(
    values.origin,
    values.destination
  );

  const shippment = await prisma.shippment.create({
    data: {
      trackingNumber,
      ...values,
    },
  });

  if (!shippment) throw new Error("Unable to create Shippment");

  revalidatePath("/dashboard");

  redirect("/dashboard");
};

export const updateShippment = async (
  values: ShippmentFormData,
  id: string
) => {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/login");

  const validation = ShippmentSchema.safeParse(values);
  if (!validation.success) throw new Error(validation.error.errors[0].message);

  const shippmentExist = await prisma.shippment.findUnique({
    where: { id },
  });
  if (!shippmentExist) throw new Error("Invalid Shippment ID");

  const shippment = await prisma.shippment.update({
    where: { id },
    data: { trackingNumber: shippmentExist.trackingNumber, ...values },
  });
  if (!shippment) throw new Error("Unable to update shippment");

  revalidatePath("/dashboard");

  redirect(`/dashboard/shippment/${shippment.id}`);
};

export const deleteShippment = async (id: string) => {
  const session = await getSession();
  if (!session.isLoggedIn) redirect("/login");

  const shippmentExist = await prisma.shippment.findUnique({
    where: { id },
  });
  if (!shippmentExist) throw new Error("Invalid Shippment ID");

  await prisma.shippment.delete({
    where: { id },
  });

  redirect("/dashboard");
};
