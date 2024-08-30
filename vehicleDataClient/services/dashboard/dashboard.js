import { API_BASE_URL } from '../../enviorments/enviorments-local';
import Vehicle from '../../models/vehicle/vehicleModel';

class DashboardService {

    async fetchVehicles() {
    
        try {
            
            const response = await fetch(`${API_BASE_URL}/api/vehicles`);
            
            if (!response.ok) {
            
                throw new Error('Network response was not ok');
            
            }
            
            const vehicleData = await response.json();
    
            const vehicles = vehicleData.map(vehicleData => Vehicle.fromVehicleData(vehicleData));

            return vehicles;
        
        } catch (error) {
        
            console.error('Failed to fetch vehicles: ', error);
        
            throw error;
        
        }
    }

    async fetchVehiclesById(id) {
    
        try {
            
            const response = await fetch(`${API_BASE_URL}/api/vehicles/${id}`);

            console.log(response)
            
            if (!response.ok) {
            
                throw new Error('Network response was not ok');
            
            }
            
            const vehicleData = await response.json();
    
            const vehicle = Vehicle.fromVehicleData(vehicleData);
    

            return vehicle;
        
        } catch (error) {
        
            console.error('Failed to fetch vehicle: ', error);
        
            throw error;
        
        }
    }


}

export default DashboardService;