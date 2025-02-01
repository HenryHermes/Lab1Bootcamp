"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = authMiddleware;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = "supersecretkey";
function authMiddleware(req, res, next) {
    try {
        const header = req.header("Authorization");
        const token = header.split(" ")[1];
        console.log(token);
        if (!token)
            res.status(401).json({ message: "Acceso denegado" });
        const verified = jsonwebtoken_1.default.verify(token, JWT_SECRET);
        console.log(verified);
        req.user = verified;
        next();
    }
    catch (_a) {
        res.status(400).json({ message: "Token inválido" });
    }
}
