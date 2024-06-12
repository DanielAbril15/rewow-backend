const db = require("../utils/database");

const { DataTypes } = require("sequelize");
const AppointmentType = require("./appointment_types.models");
const Users = require("./users.models");
const AppointmentTypes = require("./appointment_types.models");

const Appointments = db.define("appointments", {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    allowNull: false,
  },
  date: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  appointmentTypeId:{
    type: DataTypes.INTEGER,
    allowNull:false,
    field:'appointment_type_id',
    references:{
      key:'id',
      model:AppointmentTypes
    }
  },
  userId:{
    type: DataTypes.UUID,
    allowNull:false,
    field:'user_id',
    references:{
      key:'id',
      model:Users
    }
  }
});

module.exports = Appointments