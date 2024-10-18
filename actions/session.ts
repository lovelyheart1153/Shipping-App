"use server";

import { sessionOptions, SessionData, defaultSession } from "@/lib/session";
import { comparePasswords, hashPassword } from "@/lib/utils";
import prisma from "@/prisma/client";
import { RegistrationFormData, RegistrationSchema } from "@/schemas/auth";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getSession = async () => {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  if (!session.isLoggedIn) session.isLoggedIn = defaultSession.isLoggedIn;

  return session;
};

export const createAccount = async (values: RegistrationFormData) => {
  const validation = RegistrationSchema.safeParse(values);
  if (!validation.success) throw new Error(validation.error.errors[0].message);

  const { email, password } = validation.data;
  const emailExist = await prisma.user.findUnique({
    where: { email },
  });
  if (emailExist) throw new Error("Email already in use");

  const hashedPassword = await hashPassword(password);
  const user = await prisma.user.create({
    data: { email, password: hashedPassword },
  });
  if (!user) throw new Error("Unable to create user");

  return true;
};

export const login = async (values: RegistrationFormData) => {
  const session = await getSession();
  const validation = RegistrationSchema.safeParse(values);
  if (!validation.success) throw new Error(validation.error.errors[0].message);

  const { email, password } = validation.data;
  const emailExist = await prisma.user.findUnique({
    where: { email },
  });
  if (!emailExist) throw new Error("Invalid credentials");

  const correctPassword = await comparePasswords(password, emailExist.password);
  if (!correctPassword) throw new Error("Invalid credentials");

  session.email = emailExist.email;
  session.userId = emailExist.id;
  session.isLoggedIn = true;
  await session.save();

  redirect("/dashboard");
};

export const logout = async () => {
  const session = await getSession();
  session.destroy();

  redirect("/");
};
