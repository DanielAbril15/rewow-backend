const PetTypes = require("../models/pet_types.models");

const getAllPetTypes = async () => {
  const data = await PetTypes.findAll();
  return data;
};

const getPetTypeById = async (id) => {
  const data = await PetTypes.findOne({
    where: {
      id,
    },
  });
  return data;
};

const createPetType = async (name) => {
  const data = await PetTypes.create({
    name,
  });
  return data;
};

const deletePetType = async (id) => {
  const data = PetTypes.destroy({
    where: {
      id,
    },
  });
  return data;
};

module.exports = {
  getAllPetTypes,
  getPetTypeById,
  createPetType,
  deletePetType,
};
