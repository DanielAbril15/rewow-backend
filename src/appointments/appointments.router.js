
const router = require("express").Router();
const passport = require("passport");
const appointmentServices = require("./appointments.services");
require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(appointmentServices.getAllAppointments)
  .post(
    passport.authenticate("jwt", { session: false }),
    appointmentServices.createAppointment
  );

router
  .route("/:appointment_id")
  .get(appointmentServices.getAppointmentById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    appointmentServices.patchAppointment
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    appointmentServices.deleteAppointment
  );

module.exports = router;
