const usersControllers = require("./users.controllers");

const getAllUsers = (req, res) => {
  usersControllers
    .getAllUsers()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const getUserById = (req, res) => {
  const id = req.params.id;
  usersControllers
    .getUserById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(404).json({ message: err.message });
    });
};

const registerUser = (req, res) => {
  const {
    petName,
    ownerName,
    email,
    password,
    phone,
    age,
    race,
    petTypeId,
  } = req.body;

  if (petName && ownerName && email && password && phone && age && race && petTypeId) {
    // Ejecutamos el controller
    usersControllers
      .createUser({
        petName,
        ownerName,
        email,
        password,
        phone,
        age,
        race,
        petTypeId,
      })
      .then((data) => {
        res.status(201).json(data);
      })
      .catch((err) => {
        res.status(400).json(err.message);
      });
  } else {
    // Error cuando no mandan todos los datos necesarios para crear un usuario
    res.status(400).json({
      message: "All fields must be completed",
      fields: {
        petName: "string",
        ownerName: "string",
        email: "example@example.com",
        password: "string",
        phone: "1231231231",
        age: "3",
        race:'M',
        petTypeId:1
      },
    });
  }
};

const patchUser = (req, res) => {
  const id = req.params.id;
  const { petName, ownerName, phone, race, petTypeId } = req.body;

  usersControllers
    .updateUser(id, { petName, ownerName, phone, race, petTypeId })
    .then((data) => {
      if (data[0]) {
        res
          .status(200)
          .json({ message: `User with ID: ${id}, edited succesfully!` });
      } else {
        res.status(404).json({ message: "Invalid ID" });
      }
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

const deleteUser = (req, res) => {
  const id = req.params.id;
  usersControllers
    .deleteUser(id)
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

// My user services

const getMyUser = (req, res) => {
  const id = req.user.id; // req.user contiene la informacion del token desencriptado

  usersControllers
    .getUserById(id)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

// TODO crear rutas protegidas /me, con los verbos para update y delete

const patchMyUser = (req, res) => {
  const id = req.user.id;
  const { petName, ownerName, phone, age, race, petTypeId } = req.body;

  usersControllers
    .updateUser(id, { petName, ownerName, phone, age, race, petTypeId })
    .then(() => {
      res.status(200).json({ message: `Your user was edited succesfully!` });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

//2 tipos de delete:
//1. por administrador
//2. por mi mismo

const deleteMyUser = (req, res) => {
  const id = req.user.id;

  usersControllers
    .updateUser(id, { status: "inactive" })
    .then(() => {
      res.status(200).json({ message: `Your user was deleted succesfully!` });
    })
    .catch((err) => {
      res.status(400).json({ message: err.message });
    });
};

module.exports = {
  getAllUsers,
  getUserById,
  patchUser,
  registerUser,
  deleteUser,
  getMyUser,
  patchMyUser,
  deleteMyUser,
};
