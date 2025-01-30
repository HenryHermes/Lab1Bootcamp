const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/delete",authMiddleware, async (req, res) => {
    try {

        await User.deleteOne({username: req.body.username});
        res.status(201).json({ message: "Usuario actualizado exitosamente" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router