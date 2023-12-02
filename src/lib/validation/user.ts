import * as z from 'zod';

export const UserLoginValidation = z.object({
  email: z.string().nonempty(),
  password: z.string().nonempty(), //
});
export const UserSignupValidation = z.object({
  firstName: z.string().nonempty(),
  lastName: z.string().nonempty(),
  email: z.string().nonempty(),
  password: z.string().nonempty(), //
});
