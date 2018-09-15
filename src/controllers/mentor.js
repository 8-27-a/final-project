const User = require("../models").User;
const Profile = require("../models").Profile;

const getAll = (req, res) => {
  User.findAll({ where: { role: "mentor" } }).then(mentors =>
    res.json(mentors)
  );
};

const getOne = (req, res) => {
  User.findOne({
    where: { role: "mentor", userId: req.params.id },
    attributes: {},
    include: { model: Profile }
  }).then(mentor => res.json(mentor));
};

const update = (req, res) => {
  const { first, last, imgUrl } = req.body;

  const updateUser = {};

  if (first) {
    updateUser.first = first;
  }
  if (last) {
    updateUser.last = last;
  }
  if (imgUrl) {
    updateUser.imgUrl = imgUrl;
  }

  User.update(updateUser, {
    where: {
      userId: req.params.id
    }
  })
    .then(() => res.json({ updated: true }))
    .catch(err =>
      res.json({
        updated: false,
        message: err
      })
    );
};

module.exports = {
  getAll,
  getOne,
  update
};
