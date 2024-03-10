import { z } from "zod";

export const ProfileBodySchema = z.object({
  avatarId: z.string({ required_error: "Escolhe um avatarzin" }),
  name: z
    .string({ required_error: "Informe a nome meu chapa" })
    .min(3, { message: "Mínimo de 3 caracteres fera" }),
});

export type ProfileBodyType = z.infer<typeof ProfileBodySchema>;
