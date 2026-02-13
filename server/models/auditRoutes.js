const express = require("express");
const router = express.Router();
const Audit = require("../models/Audit");

router.post("/add", async (req, res) => {
    const audit = new Audit(req.body);
    await audit.save();
    res.json("Audit Added");
});

router.get("/", async (req, res) => {
    const data = await Audit.find();
    res.json(data);
});

module.exports = router;
