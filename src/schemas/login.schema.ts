import { z } from 'zod'

export const loginSchema = z.object({
  username: z
    .string({
      required_error: 'El nombre de usuario es requerido',
      invalid_type_error: 'El nombre de usuario debe ser una cadena de texto',
    })
    .min(1)
    .max(100),
  password: z.string({
    required_error: 'La contraseña es requerida',
    invalid_type_error: 'La contraseña debe ser una cadena de texto',
  }),
})
