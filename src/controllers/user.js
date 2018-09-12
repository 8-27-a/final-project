const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models").User;

const signup = (req, res) => {
  bcrypt.hash(req.body.password, 10, (err, hash) => {
    if (err) {
      return res.status(500).json({
        Error: err
      });
    } else {
      // console.log("hashedPass:", hash);
      const newUser = {
        first: req.body.first,
        last: req.body.last,
        email: req.body.email,
        password: hash,
        role: req.body.role,
        imgUrl: req.body.imgUrl
      };

      User.create(newUser)
        .then(result => {
          console.log(result);
          res.status(201).json({
            message: "User created"
          });
        })
        .catch(err => {
          res.status(200).json({
            message: err
          });
        });
    }
  });
};

const auth = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ where: { email } }).then(user => {
    if (user !== null) {
      bcrypt.compare(password, user.password, (err, result) => {
        if (result) {
          const token = jwt.sign(
            { userId: user.id, email: user.email },
            process.env.JWT_ENCRYPTION,
            { expiresIn: process.env.JWT_EXPIRATION }
          );
          res.json({ token });
        } else {
          res.json({ success: false, message: "Incorrect password" });
        }
      });
    } else {
      res.json({ success: false, message: "Email already in use" });
    }
  });
};

const mentors = (req, res) => {
  User.findAll({ where: { role: "mentor" } }).then(mentors =>
    res.json(mentors)
  );
};

module.exports = {
  signup,
  auth,
  mentors
};
