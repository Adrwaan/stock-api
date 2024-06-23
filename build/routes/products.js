"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../lib/utils");
const routePrefix = "/products";
let products = (0, utils_1.generateRandomProducts)(15);
async function ProductsRoutes(app) {
    app.get(routePrefix, (_, res) => {
        return res.status(200).send(products);
    });
    app.post(routePrefix + "/create", (req, res) => {
        const { title, description, price } = req.body;
        console.log(typeof title, typeof description, typeof price);
        if (typeof title !== "string" ||
            typeof description !== "string" ||
            typeof price !== "string") {
            return res.status(400).send({
                status: 400,
                message: "The type of one of the content parameters is incorrect.",
            });
        }
        const product = new utils_1.Product({
            title,
            description,
            price,
        });
        products.push(product);
        return res
            .status(201)
            .send({ status: 201, message: "Product created.", product: product });
    });
    app.delete(routePrefix + "/delete", (req, res) => {
        const { id } = req.body;
        const productIndex = products.findIndex((product) => product.id === id);
        if (productIndex === -1)
            return res
                .status(404)
                .send({ status: 404, message: "Product was not found." });
        else {
            products.splice(productIndex, 1);
            return res.status(204).send();
        }
    });
    app.post(routePrefix + "/update", (req, res) => {
        const { oldId, newTitle, newDescription, newPrice } = req.body;
        if (typeof newTitle !== "string" &&
            typeof newDescription !== "string" &&
            typeof newPrice !== "string") {
            return res.status(400).send({
                status: 400,
                message: "The type of one of the content parameters is incorrect.",
            });
        }
        const newProduct = {
            id: oldId,
            title: newTitle,
            description: newDescription,
            price: newPrice,
        };
        const productIndex = products.findIndex((product) => product.id === oldId);
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
    });
}
exports.default = ProductsRoutes;
//# sourceMappingURL=products.js.map