const express = require("express");
const router = require("express").Router();

router.get("/", (req, res) => {
  res.status(404).json({
    name: "Mentor 4 Me",
    description:
      "A RESTful API app that allows mentors/students to connect and book mentoring sesions.",
    home: "https://mentor4me-app.herokuapp.com",
    routes: {
      "/": {
        methods: ["GET"]
      },
      "/v1": {
        methods: ["GET"]
      },
      "/v1/users/": {
        methods: ["GET", "POST"]
      },
      "/v1/users/:user_id": {
        methods: ["GET", "PUT", "DELETE"]
      },
      "/v1/auth": {
        methods: ["POST"]
      }
    }
  });
});

module.exports = router;
