const petTypesControllers = require("./petTypes.controllers");

const getAllPetTypes = (req, res) => {
  petTypesControllers
    .getAllPetTypes()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getPetTypeById = (req, res) => {
  const id = req.params.id;
  petTypesControllers
    .getPetTypeById(id)
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

const createPetType = (req, res) => {
  const { name } = req.body;
  if (name) {
    petTypesControllers
      .createPetType({ name })
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

const deletePetType = (req, res) => {
  const id = req.params.id;
  petTypesControllers
    .deletePetType(id)
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
  getAllPetTypes,
  createPetType,
  getPetTypeById,
  deletePetType,
};
