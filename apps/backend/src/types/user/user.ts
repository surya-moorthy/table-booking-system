import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string(),
  email: z.email(),
  passwordHash: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .regex(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/, "Password must contain at least one letter and one number")
});

export const LoginSchema = z.object({
    email: z.email(),
    passwordHash: z.string()
})

