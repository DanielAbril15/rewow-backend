const router = require("express").Router();
const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");
const userServices = require("./users.services");
const { getMyAppointments } = require("../appointments/appointments.services");

require("../middlewares/auth.middleware")(passport);


router.get("/", userServices.getAllUsers);


router
  .route("/me")
  .get(passport.authenticate("jwt", { session: false }), userServices.getMyUser)
  .patch(
    passport.authenticate("jwt", { session: false }),
    userServices.patchMyUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    userServices.deleteMyUser
  );

router
  .route("/:id")
  .get(userServices.getUserById)
  .patch(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    userServices.patchUser
  )
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    userServices.deleteUser
  );

  router.get(
    "/me/my_appointments",
    passport.authenticate("jwt", { session: false }),
    getMyAppointments
  );

module.exports = router;
