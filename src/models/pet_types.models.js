const db = require("../utils/database");

const { DataTypes } = require("sequelize");

const PetTypes = db.define("pet_types", {
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

module.exports = PetTypes