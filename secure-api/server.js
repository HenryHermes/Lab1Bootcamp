const express = require("express");
const https = require("https");
const fs = require("fs");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const cors = require("cors");
const user = require("./models/User");
const authRoutes = require("./routes/auth");
const privateRoutes = require("./routes/private");
const actualizarRoute = require("./routes/Actualizar")
const deleteRoute = require("./routes/Delete")
const selectRoute = require("./routes/select")
const bcrypt = require("bcryptjs");


// Cargar variables de entorno
dotenv.config();

const app = express();

// Middleware de seguridad
app.use(helmet());
app.use(cors());
app.use(express.json()); // Para leer JSON en requests
app.use("/auth", authRoutes);
app.use("/private", privateRoutes);
app.use("/Actualizar",actualizarRoute);
app.use("/Delete",deleteRoute);
app.use("/select",selectRoute);


// Configurar HTTPS con el certificado SSL
const options = {
    key: fs.readFileSync("server.key"),
    cert: fs.readFileSync("server.crt"),
};

// Conectar a MongoDB
mongoose.connect("mongodb://localhost:27017/secure-api", {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(async () => {console.log("✅ Conectado a MongoDB")})
.catch((err) => console.error("❌ Error de conexión:", err));


// Ruta básica
app.get("/", (req, res) => {
    res.send("API Segura con Express y MongoDB 🚀");
});

// Levantar servidor HTTPS
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🔒 Servidor HTTPS corriendo en el puerto:${PORT}`);
    
});
