import express, { Express } from "express";
import { prisma } from "../../lib/prismaClient";
import { ProductController } from "../../controllers/productController";
import { ProductsService } from "../../services/ProductsService";

export function productRoute(app: Express): void {
    const router = express.Router()
    const service = new ProductsService()
    const productController = new ProductController()
    app.use('/api/products', router)

    router.get('/', productController.getAllProducts);
    router.get('/:id', productController.getProductById);
}