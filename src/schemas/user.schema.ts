import { z } from 'zod'

export const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().nullable(),
  username: z.string(),
  role: z.enum(['MASTER', 'ADMIN', 'SELLER']),
  createdAt: z.date().default(new Date()),
  updatedAt: z.date().default(new Date()),
})

export const createUserSchema = z.object({
  name: z
    .string({
      required_error: 'El nombre es requerido',
      invalid_type_error: 'El nombre debe ser una cadena de texto',
    })
    .min(5, {
      message: 'El nombre debe tener al menos 5 caracteres',
    })
    .max(255, {
      message: 'El nombre debe tener menos de 255 caracteres',
    })
    .nullable(),
  username: z
    .string({
      required_error: 'El nombre de usuario es requerido',
      invalid_type_error: 'El nombre de usuario debe ser una cadena de texto',
    })
    .min(4, {
      message: 'El nombre de usuario debe tener al menos 4 caracteres',
    })
    .max(100, {
      message: 'El nombre de usuario debe tener menos de 100 caracteres',
    }),
  password: z
    .string({
      required_error: 'La contraseña es requerida',
      invalid_type_error: 'La contraseña debe ser una cadena de texto',
    })
    .min(8, {
      message: 'La contraseña debe tener al menos 8 caracteres',
    })
    .max(100, {
      message: 'La contraseña debe tener menos de 100 caracteres',
    }),
  role: z.enum(['MASTER', 'ADMIN', 'SELLER'], {
    required_error: 'El rol es requerido',
    invalid_type_error: 'El rol debe ser una cadena de texto',
  }),
})
