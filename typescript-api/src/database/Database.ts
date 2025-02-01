import mongoose from "mongoose";

const MONGO_URI = "mongodb://localhost:27017/secure-api";

class Database {
    private static instance: Database;

    private constructor() {
        mongoose.connect(MONGO_URI!).then(async () => {console.log("✅ Conectado a MongoDB")});
    }

    static getInstance(): Database {
        if (!Database.instance) {
            Database.instance = new Database();
        }
        return Database.instance;
    }
}

export const db = Database.getInstance();
