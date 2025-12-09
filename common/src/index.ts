import z = require("zod");

export const signupInput = z.object({
  username:z.string(),
  password:z.string(),
})

type SignupParam = z.infer<typeof signupInput>;
