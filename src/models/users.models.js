const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const PetTypes = require("./pet_types.models");

const Users = db.define("users", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  petName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "pet_name",
  },
  ownerName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "owner_name",
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
        isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  phone: {
    type: DataTypes.STRING, 
    allowNull: false,
    unique: true
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  race: {
    type: DataTypes.STRING,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user'
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'active'
  },
  isVerified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    field: 'is_verified',
    defaultValue: false
  },
  petTypeId:{
    type: DataTypes.INTEGER,
    allowNull:false,
    field:'pet_type_id',
    references:{
      key:'id',
      model:PetTypes
    }
  }
});

module.exports = Users