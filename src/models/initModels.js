const Users = require('./users.models')
const Appointments = require('./appointments.models')
const AppointmentTypes = require('./appointment_types.models')
const PetTypes = require('./pet_types.models')

const initModels = () => {
    Users.hasMany(Appointments);
    Appointments.belongsTo(Users);

    AppointmentTypes.hasMany(Appointments);
    Appointments.belongsTo(AppointmentTypes);

    PetTypes.hasMany(Users);
    Users.belongsTo(PetTypes);
  
}


module.exports = initModels