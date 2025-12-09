"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signupInput = void 0;
const z = require("zod");
exports.signupInput = z.object({
    username: z.string(),
    password: z.string(),
});
//# sourceMappingURL=index.js.map