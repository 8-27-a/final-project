const express = require("express");
const router = require("express").Router();
const userCtrl = require("../controllers/user");
const mentorCtrl = require("../controllers/mentor");
const studentCtrl = require("../controllers/student");

router.get("/", (req, res) => {});

router.post("/signup", userCtrl.signup);
router.post("/auth", userCtrl.auth);
// router.delete("/users/:id", userCtrl.remove);

router.get("/mentors", mentorCtrl.getAll);
router.get("/mentors/:id", mentorCtrl.getOne);
router.put("/mentors/:id", mentorCtrl.update);

router.get("/students", studentCtrl.getAll);
router.put("/students/:id", studentCtrl.update);

module.exports = router;
