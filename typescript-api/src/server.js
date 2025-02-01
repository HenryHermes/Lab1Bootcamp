"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const fs_1 = __importDefault(require("fs"));
const helmet_1 = __importDefault(require("helmet"));
const cors_1 = __importDefault(require("cors"));
const auth_1 = require("./routes/auth");
const users_1 = require("./routes/users");
require("reflect-metadata"); // Necesario para decoradores
const mongoose_1 = __importDefault(require("mongoose"));
const poducts_1 = require("./routes/poducts");
const app = (0, express_1.default)();
// Seguridad
app.use((0, helmet_1.default)());
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Rutas
app.use("/auth", auth_1.authRouter);
app.use("/users", users_1.userRouter);
app.use("/products", poducts_1.productRouter);
//conectarse con DB
mongoose_1.default.connect("mongodb://localhost:27017/secure-api").then(() => __awaiter(void 0, void 0, void 0, function* () { console.log("✅ Conectado a MongoDB"); }))
    .catch((err) => console.error("❌ Error de conexión:", err));
// Configurar HTTPS
const options = {
    key: fs_1.default.readFileSync("server.key"),
    cert: fs_1.default.readFileSync("server.crt"),
};
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🔒 Servidor HTTPS corriendo en el puerto:${PORT}`);
});
