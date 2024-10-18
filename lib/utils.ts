import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import bcrypt from "bcryptjs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function hashPassword(password: string) {
  return await bcrypt.hash(password, 11);
}

export async function comparePasswords(
  plainTextPassword: string,
  hashedPassword: string
) {
  return await bcrypt.compare(plainTextPassword, hashedPassword);
}

export const generateTrackingNumber = (from: string, to: string) => {
  const randomNumber = Math.ceil(Math.random() * 100000001);
  const trackingNumber =
    from[0].toUpperCase() + randomNumber + to[0].toUpperCase();

  return trackingNumber;
};
