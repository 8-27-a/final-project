module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define("User", {
    userId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    first: {
      type: DataTypes.STRING,
      allowNull: false
    },
    last: {
      type: DataTypes.STRING,
      allowNull: false
    },
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
    },
    imgUrl: {
      type: DataTypes.STRING
    }
  });

  // Model.associate = function(models) {
  //   this.Postings = this.belongsToMany(models.Posting, {
  //     through: "UserPosting"
  //   });
  // };

  // sequelize.sync({ force: true });
  return Model;
};
