const VehicleDAO = require('../dao/vehicleDAO');
const VehicleDTO = require('../dto/vehicleDTO');

class VehicleService {
    async getVehicles() {

        const vehicles = await VehicleDAO.getVehicles();
        return vehicles.map(vehicle => VehicleDTO.fromData(vehicle));

    }
}

module.exports = new VehicleService();