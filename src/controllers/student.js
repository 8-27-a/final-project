const User = require("../models").User;
const Profile = require("../models").Profile;

const getOne = (req, res) => {
  User.findOne({
    where: { role: "student", userId: req.params.id },
    attributes: {},
    include: { model: Profile }
  }).then(student => {
    console.log("student", student);
    const output = {
      firstName: student.first,
      lastName: student.last,
      email: student.email,
      image: student.imgUrl,
      role: student.role,
      summary: student.Profile.summary,
      bio: student.Profile.bio
    };

    res.json(output);
  });
};

// const getAll = (req, res) => {
//   User.findAll({ where: { role: "student" } }).then(students =>
//     res.json(students)
//   );
// };

const getAll = (req, res) => {
  User.findAll({
    where: { role: "student" },
    attributes: {},
    include: { model: Profile }
  })
    // .then(students => res.json(students));
    .then(student => {
      const studentProfile = student.map(student => {
        return Object.assign(
          {},
          {
            userId: student.userId,
            firstName: student.first,
            lastName: student.last,
            email: student.email,
            image: student.imgUrl,
            bio: student.Profile.bio,
            summary: student.Profile.summary
          }
        );
      });
      console.log("studentProfile", studentProfile);
      res.json({ studentProfile });
    });
};

// const update = (req, res) => {
//   const { first, last, imgUrl, summary, bio } = req.body;

//   const updateUser = {};
//   const updateProfile = {};

//   if (first) {
//     updateUser.first = first;
//   }
//   if (last) {
//     updateUser.last = last;
//   }
//   if (imgUrl) {
//     updateUser.imgUrl = imgUrl;
//   }
//   if (summary) {
//     updateProfile.summary = summary;
//   }
//   if (bio) {
//     updateProfile.bio = bio;
//   }

//   User.update(updateUser, {
//     where: {
//       userId: req.params.id
//     }
//   })
//     .then(() => {
//       Profile.update(updateProfile, { where: { userId: req.params.id } }).then(
//         () =>
//           User.findOne({
//             where: { role: "student", userId: req.params.id },
//             attributes: {},
//             include: { model: Profile }
//           }).then(updatedUser => {
//             const userOutput = {
//               userId: updatedUser.userId,
//               firstName: updatedUser.first,
//               lastName: updatedUser.last,
//               email: updatedUser.email,
//               image: updatedUser.imgUrl,
//               bio: updatedUser.Profile.bio,
//               summary: updatedUser.Profile.summary
//             };

//             res.json({ updated: true, user: userOutput });
//           })
//       );
//     })
//     .catch(err =>
//       res.json({
//         updated: false,
//         message: err
//       })
//     );
// };

module.exports = {
  getAll,
  getOne
};
