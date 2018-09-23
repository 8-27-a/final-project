module.exports = (sequelize, DataTypes) => {
  var Model = sequelize.define("Appointment", {
    apptId: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    time: {
      type: DataTypes.TIME,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING
    },
    status: {
      type: DataTypes.ENUM,
      values: ["accepted", "rejected", "pending"],
      defaultValue: "pending"
    }
  });

  Model.associate = function(models) {
    this.Appointment = this.belongsTo(models.User, {
      foreignKey: "mentorId",
      targetKey: "userId"
    });

    this.Appointment = this.belongsTo(models.User, {
      foreignKey: "studentId",
      targetKey: "userId"
    });
  };

  // Model.sync({ force: true });
  return Model;
};
