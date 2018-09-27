const Op = require("sequelize").Op;
const User = require("../models").User;
const Profile = require("../models").Profile;

const getOne = (req, res) => {
  User.findOne({
    where: { role: "mentor", userId: req.params.id },
    attributes: {},
    include: { model: Profile }
  }).then(mentor => {
    console.log("mentor", mentor);
    const output = {
      firstName: mentor.first,
      lastName: mentor.last,
      email: mentor.email,
      image: mentor.imgUrl,
      role: mentor.role,
      summary: mentor.Profile.summary,
      bio: mentor.Profile.bio
    };

    res.json(output);
  });
};

const getAll = (req, res) => {
  const where = {
    role: "mentor"
  };

  if (req.query.s) {
    //where[Op.or]: [{ first: req.query.s }, { last: req.query.s }]
  }
  User.findAll({
    where,
    attributes: {},
    include: { model: Profile }
  })
    // .then(mentors => res.json(mentors));
    .then(mentors => {
      //console.log("mentor", mentors);
      const mentorProfile = mentors.map(mentor => {
        return Object.assign(
          {},
          {
            userId: mentor.userId,
            firstName: mentor.first,
            lastName: mentor.last,
            email: mentor.email,
            image: mentor.imgUrl,
            summary: mentor.Profile.summary,
            bio: mentor.Profile.bio
          }
        );
      });
      res.json(mentorProfile);
    });
};

// const getAll = (req, res) => {
//   User.findAll({ where: { role: "mentor" } }).then(mentor =>
//     res.json(mentors)
//   );
// };

module.exports = {
  getAll,
  getOne
};
