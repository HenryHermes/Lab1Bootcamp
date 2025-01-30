const mongoose = require('mongoose');


const MONGO_URI = "mongodb://localhost:27017/secure-api";

mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("Conectado a MongoDB"))
.catch(err => console.error("Error al conectar:", err));