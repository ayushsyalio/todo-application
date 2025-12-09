"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoInput = exports.signupInput = void 0;
const z = require("zod");
exports.signupInput = z.object({
    username: z.string(),
    password: z.string(),
});
exports.todoInput = z.object({
    title: z.string().min(1, "Title is required").max(100),
    description: z.string().optional(),
    done: z.boolean().default(false),
});
//# sourceMappingURL=index.js.map