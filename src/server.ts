import fastify from "fastify";
import ProductsRoutes from "./routes/products";

const app = fastify({
  logger: {
    transport: {
      target: "pino-pretty",
    },
  },
});

app.register(ProductsRoutes);

app.listen({ port: 3333 });
