module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define("User", {
    userId: {
      type: DataTypes.INTEGER,
      autoincrement: true,
      allowNull: false,
      primaryKey: true
    },
    first: DataTypes.STRING,
    last: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: { isEmail: { msg: "Email invalid." } }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    role: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["student", "mentor"]
    }
  });

  // Model.associate = function(models) {
  //   this.Postings = this.belongsToMany(models.Posting, {
  //     through: "UserPosting"
  //   });
  // };

  return Model;
};
