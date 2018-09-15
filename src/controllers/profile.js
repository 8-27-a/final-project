const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Profile = require("../models").Profile;
const User = require("../models").User;

const getOne = (req, res) => {
  Profile.findOne({
    where: {
      profile_Id: req.params.id
    }
  }).then(profile => {
    console.log(profile);
    res.json(profile);
  });
};

const create = (req, res) => {
  const newProfile = {
    title: req.body.title,
    description: req.body.description,
    UserUserId: req.body.UserUserId
  };

  Profile.create(newProfile)
    .then(profile => res.status(201).json(profile))
    .catch(err =>
      res.status(422).json({
        Error: err
      })
    );
};

// const studentProfiles = (req, res) => {
//   User.findAll({ where: { "role": "student" } }).then(studentP =>
//     res.json(studentP)
//   );
// };

const update = (req, res) => {
  const { title, description, UserUserId } = req.body;

  const updatedProfile = {};

  if (title) {
    updatedProfile.title = title;
  }
  if (description) {
    updatedUser.description = description;
  }
  if (UserUserId) {
    updatedUser.UserUserId = UserUserId;
  }

  Profile.update(updatedProfile, {
    where: {
      profile_Id: req.params.id
    }
  })
    .then(profile => res.json({ updated: true }))
    .catch(err =>
      res.json({
        updated: false,
        message: err
      })
    );
};

const getOne = (req, res) => {
  Profile.findOne({
    where: {
      profile_Id: req.params.id
    }
  }).then(profile => {
    console.log(profile);
    res.json(profile);
  });
};

const remove = (req, res) => {
  console.log("profData:", req.profData);
  Profile.findOne({ where: { profile_Id: req.params.id } }).then(prof => {
    if (prof !== null) {
      Profile.destroy({
        where: {
          profile_Id: req.params.id
        }
      })
        .then(prof =>
          res.json({ success: true, message: "User Profile has been deleted." })
        )
        .catch(err =>
          res.json({
            Error: err
          })
        );
    } else {
      res.json({
        success: false,
        message: "There's no profile with that Id."
      });
    }
  });
};

module.exports = {
  getOne,
  create,
  update,
  remove
};
