import { z } from "zod";

export const RegisterSchema = z.object({
  name: z.string(),
  email: z.email(),
  password: z.string()});

export const LoginSchema = z.object({
    email: z.email(),
    passwordHash: z.string()
})

export const User = z.object({
  name : z.string(),
  email : z.string()
})