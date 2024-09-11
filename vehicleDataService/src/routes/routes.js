const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');
const userController = require('../controllers/userController');

router.get('/vehicles', vehicleController.getVehicles);

router.get('/users', userController.getUsers);

router.post('/register', userController.registerNewUser);

router.post('/loginUser', userController.loginUser);

module.exports = router;
