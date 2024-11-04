import { z } from "zod";

export const loginSchema = z.object({
    userName: z.string().min(3, "O nome de usuário deve ter pelo menos 3 caracteres."),
    password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres."),
  }); 