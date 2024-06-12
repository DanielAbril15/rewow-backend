const AppointmentTypes = require("../models/appointment_types.models");

const getAllAppointmentTypes = async () => {
  const data = await AppointmentTypes.findAll();
  return data;
};

const getAppointmentTypeById = async (id) => {
  const data = await AppointmentTypes.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createAppointmentType = async (name) => {
  const data = await AppointmentTypes.create({
    name,
  });
  return data;
};

const deleteAppointmentType = async (id) => {
  const data = AppointmentTypes.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllAppointmentTypes,
  getAppointmentTypeById,
  createAppointmentType,
  deleteAppointmentType,
};
