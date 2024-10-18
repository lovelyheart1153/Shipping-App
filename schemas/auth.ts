import { z } from "zod";

export const RegistrationSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type RegistrationFormData = z.infer<typeof RegistrationSchema>;
