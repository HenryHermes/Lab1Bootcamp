const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const router = express.Router();

router.get("/traer", async (req, res) => {
    try{
        res.json(User.find({}).then(function(User) {
            res.json(User)
        }))
    } catch(error){
        res.status(500).json({ error: error.message });
    }
    
});

router.get("/traerEspecifico", async (req, res) => {
    try{
        res.json(User.find({username: req.body.username}).then(function(User) {
            res.json(User)
        }))
    } catch(error){
        res.status(500).json({ error: error.message });
    }
    
});

module.exports = router