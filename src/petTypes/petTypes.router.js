const router = require("express").Router();
const petTypeServices = require("./petTypes.services");
const passport = require("passport");
const adminValidate = require("../middlewares/role.middleware");

require("../middlewares/auth.middleware")(passport);

router
  .route("/")
  .get(petTypeServices.getAllPetTypes)
  .post(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    petTypeServices.createPetType
  );

router
  .route("/:id")
  .get(petTypeServices.getPetTypeById)
  .delete(
    passport.authenticate("jwt", { session: false }),
    adminValidate,
    petTypeServices.deletePetType
  );

module.exports = router;