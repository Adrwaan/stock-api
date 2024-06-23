"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateRandomProducts = exports.Product = void 0;
const uuid_1 = require("uuid");
const faker_1 = require("@faker-js/faker");
class Product {
    id;
    title;
    description;
    price;
    constructor({ title, description, price }) {
        this.id = (0, uuid_1.v4)();
        this.title = title;
        this.description = description;
        this.price = price;
    }
}
exports.Product = Product;
function generateRandomProducts(amount) {
    let products = [];
    for (let i = 0; i < amount; i++) {
        const title = faker_1.faker.commerce.product();
        const price = faker_1.faker.commerce.price({ min: 10, max: 10000 });
        products.push(new Product({
            title,
            description: `A ${title} product.`,
            price: price,
        }));
    }
    return products;
}
exports.generateRandomProducts = generateRandomProducts;
//# sourceMappingURL=utils.js.map