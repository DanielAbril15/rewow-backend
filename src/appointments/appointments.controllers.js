//? Dependencies
const uuid = require('uuid')

const Appointments = require('../models/Appointments.models')

const getAllAppointments = async () => {
    const data = await Appointments.findAll()
    return data
}

const getAppointmentById = async (id) => {
    const data = await Appointments.findOne({
        where: {
            id: id,
        }
    })
    return data
}


const createAppointment = async (data) => {
    const newAppointment = await Appointments.create({
        id: uuid.v4(),
        date: data.date,
        appointmentTypeId: data.appointmentTypeId,
        userId: data.userId,
    })
    return newAppointment
}

const updateAppointment = async (id, data) => {
    const result = await Appointments.update(data, {
        where: {
            id
        }
    })
    return result
}

const deleteAppointment = async (id) => {
    const data = await Appointments.destroy({
        where: {
            id
        }
    })
    return data
}

const getMyAppointments = async (userId) => {
    const data = await Appointments.findAll({
        where:{
            userId:userId
        }
    })
    return data
  };

module.exports = {
    createAppointment,
    getAllAppointments,
    getAppointmentById,
    updateAppointment,
    deleteAppointment,
    getMyAppointments
}