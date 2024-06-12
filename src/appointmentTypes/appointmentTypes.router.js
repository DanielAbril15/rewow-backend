const router = require("express").Router();
const appointmentTypeServices = require("./appointmentTypes.services");
const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");

require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(appointmentTypeServices.getAllAppointmentTypes)
  .post(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    appointmentTypeServices.createAppointmentType
  );

router
  .route("/:id")
  .get(appointmentTypeServices.getAppointmentTypeById)
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    appointmentTypeServices.deleteAppointmentType
  );

module.exports = router;