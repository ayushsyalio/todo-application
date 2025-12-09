import z = require("zod");
export declare const signupInput: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
}, z.z.core.$strip>;
export declare const todoInput: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    done: z.ZodDefault<z.ZodBoolean>;
}, z.z.core.$strip>;
//# sourceMappingURL=index.d.ts.map