import { Request, Response } from "express";
import { Product } from "../models/Product";
import { Logger } from "../decorators/Logger";

export class ProductController {
    @Logger
    static async getAllProducts(req: Request, res: Response) {
        const productos = await Product.find();
        res.json(productos);
    }

    @Logger
    static async createProduct(req: Request, res: Response) {
        try {
            const nuevoProducto = new Product(req.body);
            await nuevoProducto.save();
            res.status(201).json(nuevoProducto);
        } catch (error : any) {
            res.status(400).json({ error: error.message });
        }
    }

    @Logger
    static async updateProduct(req: Request, res: Response) {
        try {
            const producto = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
            if (!producto) {
                res.status(404).json({ message: "Producto no encontrado" });
            }else{
                res.json(producto);
            }
            
        } catch (error : any) {
            res.status(400).json({ error: error.message });
        }
    }

    @Logger
    static async deleteProduct(req: Request, res: Response) {
        try {
            const producto = await Product.findByIdAndDelete(req.params.id);
            if (!producto) {
                res.status(404).json({ message: "Producto no encontrado" });
            }else{
                res.json({ message: "Producto eliminado" });
            }
            
        } catch (error : any) {
            res.status(400).json({ error: error.message });
        }
    }
}
