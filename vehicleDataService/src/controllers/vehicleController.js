const car_data = require('../models/vehicles/vehicle');
const VehicleService = require('../services/vehicleService');


class VehicleController {
  async getVehicles(req, res) {
    try {

      const vehicles = await VehicleService.getVehicles();
      res.json(vehicles);

    }
    catch (error) {

      res.status(500).json({error: error.message});

    }
  }
}

module.exports = new VehicleController();


// exports.getVehicles = async (req, res) => {
//   try {
//     const vehicles = await car_data.findAll();
    
    
//     return res.json(vehicles);
//   } 
//   catch (error) {
    
//     res.status(500).json({ error: error.message });
//   }
// };



// exports.getVehicleById = async (req, res) => {
//   try {
//       const { id } = req.params;
//       const vehicle = await car_data.findByPk(id);

//       if (!vehicle) {
//           return res.status(404).json({ error: 'Vehicle not found' });
//       }

//       res.json(vehicle);
//   } catch (error) {
//       res.status(500).json({ error: error.message });
//   }
// };

