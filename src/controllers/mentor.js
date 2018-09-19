const User = require("../models").User;
const Profile = require("../models").Profile;

const getOne = (req, res) => {
  User.findOne({
    where: { role: "mentor", userId: req.params.id },
    attributes: {},
    include: { model: Profile }
  }).then(mentor => {
    const output = {
      firstName: mentor.first,
      lastName: mentor.last,
      email: mentor.email,
      imgUrl: mentor.imgUrl,
      bio: mentor.Profile.bio,
      summary: mentor.Profile.summary
    };

    res.json(output);
  });
};

// const getAll = (req, res) => {
//   User.findAll({ where: { role: "mentor" } }).then(mentor =>
//     res.json(mentors)
//   );
// };

const getAll = (req, res) => {
  User.findAll({
    where: { role: "mentor" },
    attributes: {},
    include: { model: Profile }
  })
    // .then(mentors => res.json(mentors));
    .then(mentor => {
      const mentorProfile = mentor.map(mentor => {
        return Object.assign(
          {},
          {
            userId: mentor.userId,
            firstName: mentor.first,
            lastName: mentor.last,
            email: mentor.email,
            image: mentor.imgUrl,
            bio: mentor.Profile.bio,
            summary: mentor.Profile.summary
          }
        );
      });
      console.log("mentorProfile", mentorProfile);
      res.json({ mentorProfile });
    });
};

const update = (req, res) => {
  const { first, last, imgUrl, summary, bio } = req.body;

  console.log("BODY", req.body);

  const updateUser = {};
  const updateProfile = {};

  if (first) {
    updateUser.first = first;
  }
  if (last) {
    updateUser.last = last;
  }
  if (imgUrl) {
    updateUser.imgUrl = imgUrl;
  }
  if (summary) {
    updateProfile.summary = summary;
  }
  if (bio) {
    updateProfile.bio = bio;
  }

  User.findOne({ where: { userId: req.params.id } }).then(foundUser => {
    if (foundUser) {
      User.update(updateUser, {
        where: {
          userId: req.params.id
        }
      })
        .then(() => {
          Profile.update(updateProfile, {
            where: { userId: req.params.id }
          }).then(() =>
            User.findOne({
              where: { role: "mentor", userId: req.params.id },
              attributes: {},
              include: { model: Profile }
            }).then(updatedUser => {
              const userOutput = {
                userId: updatedUser.userId,
                firstName: updatedUser.first,
                lastName: updatedUser.last,
                email: updatedUser.email,
                image: updatedUser.imgUrl,
                bio: updatedUser.Profile.bio,
                summary: updatedUser.Profile.summary
              };

              res.json({ updated: true, user: userOutput });
            })
          );
        })
        .catch(err =>
          res.json({
            updated: false,
            message: err
          })
        );
    } else {
      res.json({ updated: false, message: "No users found with that ID" });
    }
  });
};

module.exports = {
  getAll,
  getOne,
  update
};
