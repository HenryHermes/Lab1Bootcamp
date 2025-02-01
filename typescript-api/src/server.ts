import express from "express";
import https from "https";
import fs from "fs";
import helmet from "helmet";
import cors from "cors";
import { authRouter } from "./routes/auth";
import { userRouter } from "./routes/users";
import "reflect-metadata"; // Necesario para decoradores
import mongoose from "mongoose";
import { productRouter } from "./routes/poducts";

const app = express();

// Seguridad
app.use(helmet());
app.use(cors());
app.use(express.json());

// Rutas
app.use("/auth", authRouter);
app.use("/users", userRouter);
app.use("/products", productRouter);

//conectarse con DB
mongoose.connect("mongodb://localhost:27017/secure-api").then(async () => {console.log("✅ Conectado a MongoDB")})
.catch((err) => console.error("❌ Error de conexión:", err));

// Configurar HTTPS
const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.crt"),
};

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🔒 Servidor HTTPS corriendo en el puerto:${PORT}`);
    
});
