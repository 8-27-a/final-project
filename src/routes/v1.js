const express = require("express");
const router = require("express").Router();
const userCtrl = require("../controllers/user");

router.get("/", (req, res) => {});

router.post("/signup", userCtrl.signup);
router.post("/auth", userCtrl.auth);
router.get("/mentors", userCtrl.mentors);

module.exports = router;
