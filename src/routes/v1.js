const express = require("express");
const router = require("express").Router();
const userCtrl = require("../controllers/user");
const mentorCtrl = require("../controllers/mentor");
const studentCtrl = require("../controllers/student");
const profileCtrl = require("../controllers/profile");

// user CRUD routes
router.get("/users", userCtrl.getAll);
router.post("/signup", userCtrl.signup);
router.post("/auth", userCtrl.auth);
router.delete("/users/:id", userCtrl.remove);

router.get("/mentors", mentorCtrl.getAll);
router.get("/mentors/:id", mentorCtrl.getOne);
router.put("/mentors/:id", mentorCtrl.update);

router.get("/students", studentCtrl.getAll);
router.get("/students/:id", studentCtrl.getOne);
router.put("/students/:id", studentCtrl.update);

// profile CRUD routes
router.get("/profile/:id", profileCtrl.getOne);
router.get("/profiles", profileCtrl.getAll);
router.post("/profiles", profileCtrl.create);
router.put("/profile/:id", profileCtrl.update);
router.delete("/profile/:id", profileCtrl.remove);

module.exports = router;
