import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET = "supersecretkey"

export function authMiddleware(req: Request, res: Response, next: NextFunction){  
   
    try {
        const header = req.header("Authorization") as string;
        const token = header.split(" ")[1]
        console.log(token);
        if (!token)  res.status(401).json({ message: "Acceso denegado" });
        const verified = jwt.verify(token, JWT_SECRET!);
        console.log(verified);
        (req as any).user = verified;
        next();
    } catch {
         res.status(400).json({ message: "Token inválido" });
    }
}
