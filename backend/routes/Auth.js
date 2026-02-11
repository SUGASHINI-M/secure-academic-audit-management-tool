const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
    try {
        const hashed = await bcrypt.hash(req.body.password || "", 10);
        const user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: hashed,
            role: req.body.role || "student",
            department: req.body.department
        });
        res.json("User registered");
    } catch (err) {
        res.status(500).json(err.message || "Registration failed");
    }
});

router.post("/login", async (req, res) => {
    if (!req.body.email || !req.body.password) {
        return res.json("Fields required");
    }
    const user = await User.findOne({ email: req.body.email });
    if (!user) return res.json("User not found");
    const match = await bcrypt.compare(req.body.password, user.password);
    if (!match) return res.json("Wrong password");
    res.json({
        token: jwt.sign({ id: user._id }, process.env.JWT_SECRET),
        role: user.role,
        department: user.department
    });
});

module.exports = router;
