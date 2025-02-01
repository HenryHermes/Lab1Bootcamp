import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/User";
import { Logger } from "../decorators/Logger";

const router = express.Router();
const JWT_SECRET = "supersecretkey"

class authFuntion{
    @Logger
    static async register(req: express.Request, res: express.Response) {
        const hashedPassword = await bcrypt.hash(req.body.password, 10);
        const newUser = new User({ username: req.body.username, password: hashedPassword });
        try{
            await newUser.save();
            res.status(201).json({ message: "Usuario registrado" });
        }catch{
            res.status(400).json({ message: "Error de entrada" });
        }
        
    }

    @Logger
    static async login(req: express.Request, res: express.Response) {
        const user = await User.findOne({ username: req.body.username });
        if (!user) { 
            res.status(400).json({ message: "Usuario no encontrado" })
        } else {
            const isMatch = await bcrypt.compare(req.body.password, user.password);
            if (!isMatch) { 
                res.status(400).json({ message: "Contraseña incorrecta" })
            } else {
                const token = jwt.sign({ id: user._id }, JWT_SECRET!, { expiresIn: "1h" });
                res.json({ token });
            }
        }
    }
}

router.post("/register", authFuntion.register);
router.post("/login", authFuntion.login);

export { router as authRouter };
