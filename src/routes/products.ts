import { FastifyInstance, FastifyRequest } from "fastify";
import { v4 as uuid } from "uuid";

interface Product {
  id: string;
  title: string;
  description: string;
  price: string;
}

interface NewProduct {
  oldId: string;
  newTitle: string;
  newDescription: string;
  newPrice: string;
}

const routePrefix = "/products";

let products: Product[] = [
  {
    id: uuid(),
    title: "iPhone 15",
    description: "New iPhone by Apple Inc.",
    price: "10000",
  },
  {
    id: uuid(),
    title: "iPhone 14",
    description: "Old iPhone by Apple Inc.",
    price: "9000",
  },
  {
    id: uuid(),
    title: "iPhone 13",
    description: "Old iPhone by Apple Inc.",
    price: "8000",
  },
  {
    id: uuid(),
    title: "iPhone 12",
    description: "Old iPhone by Apple Inc.",
    price: "7000",
  },
  {
    id: uuid(),
    title: "iPhone 11",
    description: "Old iPhone by Apple Inc.",
    price: "6000",
  },
  {
    id: uuid(),
    title: "iPhone 10",
    description: "Old iPhone by Apple Inc.",
    price: "5000",
  },
];

export default async function ProductsRoutes(app: FastifyInstance) {
  app.get(routePrefix, (_, res) => {
    return res.status(200).send(products);
  });

  app.post(
    routePrefix + "/create",
    (req: FastifyRequest<{ Body: Product }>, res) => {
      const { title, description, price } = req.body;

      const product: Product = {
        id: uuid(),
        title,
        description,
        price,
      };

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
    (req: FastifyRequest<{ Body: NewProduct }>, res) => {
      const { oldId, newTitle, newDescription, newPrice } = req.body;
      const newProduct: Product = {
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
