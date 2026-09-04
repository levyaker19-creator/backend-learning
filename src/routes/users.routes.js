const express = require("express");

const usersController = require("../controllers/users.controller");

const router = express.Router()

router.get("/users", usersController.getUsers);

router.get("/users/:id", usersController.getUserById);

router.post("/users", usersController.postUsers);

router.put("/users/:id", usersController.updateUser);   

router.delete("/users/:id", usersController.deleteUser);
module.exports = router;