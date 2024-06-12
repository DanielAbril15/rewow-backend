const Appointments = require("../models/appointments.models");
const appointmentControllers = require("./appointments.controllers");

const getAllAppointments = (req, res) => {
  appointmentControllers
    .getAllAppointments()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getAppointmentById = (req, res) => {
  const id = req.params.appointment_id;

  appointmentControllers
    .getAppointmentById(id)
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

const createAppointment = (req, res) => {
  const { date, appointmentTypeId } =
    req.body;
  const userId = req.user.id;
  if (date && appointmentTypeId) {
    Appointments.createAppointment({
      date,
      appointmentTypeId,
      userId,
    })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json({ message: err.message });
      });
  } else {
    res.status(400).json({
      message: "Invalid data",
      fields: {
        date: "2024/06/2",
        appointmentTypeId: "string",
        userId: "number",
      },
    });
  }
};

const patchAppointment = (req, res) => {
  const { date, appointmentTypeId, userId } =
    req.body;
  const id = req.params.appointment_id;
  appointmentControllers
    .updateAppointment(id, {
      date,
      appointmentTypeId,
      userId,
    })
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `appointment with ID: ${id} edited succesfully` });
      } else {
        res.status(404).json({ message: "invalid ID", id });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteAppointment = (req, res) => {
  const id = req.params.appointment_id;
  appointmentControllers
    .deleteAppointment(id)
    .then((data) => {
      if (data) {
        res.status(204).json();
      } else {
        res.status(404).json({ message: "Invalid ID", id });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getMyAppointments = (req, res) => {
  const userId = req.user.id;
  appointmentControllers
    .getMyAppointments(userId)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllAppointments,
  getAppointmentById,
  createAppointment,
  patchAppointment,
  deleteAppointment,
  getMyAppointments,
};