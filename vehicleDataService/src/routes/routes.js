const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
const UserController = require('../controllers/userController');
const userController = require('../controllers/userController');

router.get('/vehicles', vehicleController.getVehicles);

router.get('/users', userController.getUsers);

router.post('/register', userController.registerNewUser);

module.exports = router;
