import express from "express";
import { ProductController } from "../controllers/ProductController";
import { authMiddleware } from "../middleware/authMiddleware";

const router = express.Router();

router.get("/", ProductController.getAllProducts); // Público
router.post("/Crear", authMiddleware, ProductController.createProduct); // Requiere autenticación
router.put("/update/:id", authMiddleware, ProductController.updateProduct); // Requiere autenticación
router.delete("/delete/:id", authMiddleware, ProductController.deleteProduct); // Requiere autenticación

export { router as productRouter };
