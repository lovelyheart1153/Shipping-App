import { z } from "zod";

export const RouteSchema = z.object({
  location: z.string().min(3),
  expectedArrivalDate: z.date().min(new Date()),
  arrivalDate: z.date().optional(),
  status: z.enum(["IN_TRANSIT", "ARRIVED"]),
  message: z.string().optional(),
});

export type RouteFormData = z.infer<typeof RouteSchema>;
