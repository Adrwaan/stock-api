import { FastifyInstance, FastifyRequest } from "fastify";
import { NewProductInterface, ProductInterface } from "../interfaces/products";
import { generateRandomProducts, Product } from "../lib/utils";

const routePrefix = "/products";

let products: ProductInterface[] = generateRandomProducts(15);

export default async function ProductsRoutes(app: FastifyInstance) {
  app.get(routePrefix, (_, res) => {
    return res.status(200).send(products);
  });

  app.post(
    routePrefix + "/create",
    (req: FastifyRequest<{ Body: ProductInterface }>, res) => {
      const { title, description, price } = req.body;

      const product: ProductInterface = new Product({
        title,
        description,
        price,
      });

      products.push(product);

      return res
        .status(201)
        .send({ status: 201, message: "Product created.", product: product });
    }
  );

  app.delete(
    routePrefix + "/delete/:id",
    (req: FastifyRequest<{ Params: { id: string } }>, res) => {
      const { id } = req.params;
      const productIndex = products.findIndex((product) => product.id === id);

      if (productIndex === -1)
        return res
          .status(404)
          .send({ status: 404, message: "Product was not deleted." });
      else {
        products.splice(productIndex, 1);
        return res.status(204).send();
      }
    }
  );

  app.post(
    routePrefix + "/update",
    (req: FastifyRequest<{ Body: NewProductInterface }>, res) => {
      const { oldId, newTitle, newDescription, newPrice } = req.body;
      const newProduct: ProductInterface = {
        id: oldId,
        title: newTitle,
        description: newDescription,
        price: newPrice,
      };
      const productIndex = products.findIndex(
        (product) => product.id === oldId
      );

      if (productIndex === -1 || oldId === "" || oldId === null)
        return res
          .status(404)
          .send({ status: 404, message: "Product was not found." });
      else {
        products[productIndex] = newProduct;

        return res.status(200).send({
          status: 200,
          message: "Product was updated.",
          product: newProduct,
        });
      }
    }
  );
}
