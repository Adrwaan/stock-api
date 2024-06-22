import { v4 as uuid } from "uuid";
import { faker } from "@faker-js/faker";
import { ProductInterface } from "../interfaces/products";

export class Product {
  id: string;
  title: string;
  description: string;
  price: string;

  constructor({ title, description, price }: ProductInterface) {
    this.id = uuid();
    this.title = title;
    this.description = description;
    this.price = price;
  }
}

export function generateRandomProducts(amount: number) {
  let products: Product[] = [];

  for (let i = 0; i < amount; i++) {
    const title = faker.commerce.product();
    const price = faker.commerce.price({ min: 10, max: 10000 });
    products.push(
      new Product({
        title,
        description: `A ${title} product.`,
        price: price,
      })
    );
  }

  return products;
}
