const appointmentTypesControllers = require("./appointmentTypes.controllers");

const getAllAppointmentTypes = (req, res) => {
  appointmentTypesControllers
    .getAllAppointmentTypes()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getAppointmentTypeById = (req, res) => {
  const id = req.params.id;
  appointmentTypesControllers
    .getAppointmentTypeById(id)
    .then((data) => {
      if (data) {
        res.status(200).json(data);
      } else {
        res.status(400).json({ message: `ID: ${id}, not exist` });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const createAppointmentType = (req, res) => {
  const { name } = req.body;
  if (name) {
    appointmentTypesControllers
      .createAppointmentType({ name })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({
          message: err.message,
        });
      });
  } else {
    res.status(400).json({
      message: "Missing Data",
      fields: {
        name: "string",
      },
    });
  }
};

const deleteAppointmentType = (req, res) => {
  const id = req.params.id;
  appointmentTypesControllers
    .deleteAppointmentType(id)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllAppointmentTypes,
  createAppointmentType,
  getAppointmentTypeById,
  deleteAppointmentType,
};
