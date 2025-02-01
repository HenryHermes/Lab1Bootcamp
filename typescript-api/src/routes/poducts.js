"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.productRouter = void 0;
const express_1 = __importDefault(require("express"));
const ProductController_1 = require("../controllers/ProductController");
const authMiddleware_1 = require("../middleware/authMiddleware");
const router = express_1.default.Router();
exports.productRouter = router;
router.get("/", ProductController_1.ProductController.getAllProducts); // Público
router.post("/Crear", authMiddleware_1.authMiddleware, ProductController_1.ProductController.createProduct); // Requiere autenticación
router.put("/update/:id", authMiddleware_1.authMiddleware, ProductController_1.ProductController.updateProduct); // Requiere autenticación
router.delete("/delete/:id", authMiddleware_1.authMiddleware, ProductController_1.ProductController.deleteProduct); // Requiere autenticación
