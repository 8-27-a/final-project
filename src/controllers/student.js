const User = require("../models").User;
const Profile = require("../models").Profile;

const getAll = (req, res) => {
  User.findAll({ where: { role: "student" } }).then(students =>
    res.json(students)
  );
};

const update = (req, res) => {
  const { userId, first, last, imgUrl, role } = req.body;

  const updatedUser = {};

  if (userId) {
    updatedUser.userId = userId;
  }
  if (first) {
    updatedUser.first = first;
  }
  if (last) {
    updatedUser.last = last;
  }
  if (imgUrl) {
    updatedUser.imgUrl = imgUrl;
  }

  User.update(updatedUser, {
    where: {
      userId: req.params.id
    }
  })
    .then(user => res.json({ updated: true }))
    .catch(err =>
      res.json({
        updated: false,
        message: err
      })
    );
};

const getOne = (req, res) => {
  User.findAll({
    where: { role: "student" },
    include: { model: Profile }
  }).then(students => res.json(students));
};

module.exports = { getAll, getOne, update };
