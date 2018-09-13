const express = require("express");
const router = require("express").Router();
const userCtrl = require("../controllers/user");

router.get("/", (req, res) => {});

router.post("/signup", userCtrl.signup);
router.post("/auth", userCtrl.auth);
router.get("/mentors", userCtrl.mentors);
router.get("/students", userCtrl.students);
router.get("/mentors/profile", userCtrl.getOne);
router.delete("/users/:id", userCtrl.remove);
router.put("/users/:id", userCtrl.update);

module.exports = router;
