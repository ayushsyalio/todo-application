import z = require("zod");

export const signupInput = z.object({
  username:z.string(),
  password:z.string(),
})

export const todoInput = z.object({
  title:z.string().min(1, "Title is required").max(100),
  description:z.string().optional(),
  done:z.boolean().default(false),

})

type SignupParam = z.infer<typeof signupInput>;
type TodoSchema = z.infer<typeof todoInput>;
