const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const AppointmentTypes = db.define("appointment_types", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = AppointmentTypes