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
    status: {
      type: DataTypes.ENUM,
      allowNull: false,
      values: ["accepted", "rejected", "pending"]
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

  // sequelize.sync({ force: true });
  return Model;
};
