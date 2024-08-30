const Vehicle = require('../models/vehicles/vehicle');

class VehicleDAO {
    async getVehicles () {
        return await Vehicle.findAll();
    }
}

module.exports = new VehicleDAO();
