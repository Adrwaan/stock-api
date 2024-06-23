"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const products_1 = __importDefault(require("./routes/products"));
const app = (0, fastify_1.default)({
    logger: {
        transport: {
            target: "pino-pretty",
        },
    },
});
app.register(products_1.default);
app.listen({ port: 3333 });
//# sourceMappingURL=server.js.map