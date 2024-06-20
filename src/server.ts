import fastify from "fastify";
import ProductsRoutes from "./routes/products";

const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

[ProductsRoutes].map((route) => app.register(route));

app.listen({ port: 3333 });
