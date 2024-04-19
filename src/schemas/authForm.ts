import { z } from "astro/zod";

export const authFormSchema = z.object({
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type AuthFormSchema = z.infer<typeof authFormSchema>;
