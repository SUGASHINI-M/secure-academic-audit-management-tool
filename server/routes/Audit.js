const router = require("express").Router();
const Audit = require("../models/Audit");

router.post("/add", async (req, res) => {
    await Audit.create(req.body);
    res.json("Audit Added");
});

router.get("/", async (req, res) => {
    res.json(await Audit.find());
});

/* STUDENT DEPARTMENT FILTER */
router.get("/student/:dept", async (req, res) => {
    const data = await Audit.find({ department: req.params.dept });
    res.json(data);
});

module.exports = router;
