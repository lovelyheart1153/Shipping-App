import { z } from "zod";

export const ShippmentSchema = z.object({
  sendersName: z.string().min(3),
  receiversName: z.string().min(3),
  sendersAddress: z.string().min(3),
  origin: z.string().min(3),
  destination: z.string().min(3),
  receiversAddress: z.string().min(3),
  estimatedDeliveryDate: z.date().min(new Date()),
  deliveryMode: z.enum(["BY_SHIP", "BY_AIR"]),
  status: z.enum(["IN_TRANSIT", "ARRIVED"]),
  content: z.string().min(3).optional(),
});

export type ShippmentFormData = z.infer<typeof ShippmentSchema>;
