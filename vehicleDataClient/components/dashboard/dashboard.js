// import { fetchVehicles } from "../../services/dashboard/dashboard";

// import { getVehicleById } from "../../../vehicleDataService/src/controllers/vehicleController";
import DashboardService from "../../services/dashboard/dashboard";

class Dashboard {
    
    constructor(dashboardService) {
        
        this.dashboardService = dashboardService;
        this.vehicleArray = [];
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    async initialize() {

        try {

            const vehicles = await dashboardService.fetchVehicles();
              
            this.vehicleArray = vehicles;
            
        } catch (error) {
            
            console.error('Error in main function:', error);
        }

        this.populateVehicleTable();

    }

    populateVehicleTable() {
        
        const tableBody = document.getElementById('vehicleTableBody');

        this.vehicleArray.forEach(vehicle => {
            const row = document.createElement('tr');
            row.innerHTML = `
              <td>${vehicle.car_id}</td>
              <td>${vehicle.car_year}</td>
              <td>${vehicle.car_make}</td>
              <td>${vehicle.car_model}</td>
              <td>${this.formatNumber(vehicle.car_mileage) + ' miles'}</td>
              <td>${this.formatCurrency(vehicle.car_price)}</td>
            `;
            tableBody.appendChild(row);
          });

    }

    async handleSubmit(event) {
        
        event.preventDefault();
        
        const vehicleId = document.getElementById('carIdInput').value;
        
        if (vehicleId) {

            try {
            
                const vehicle = await dashboardService.fetchVehiclesById(vehicleId);
            
                this.populateVehicleDetailsTableById(vehicle);

                console.log(vehicle)
            
            } catch (error) {
               
                console.error('Error fetching vehicle by ID:', error);
            
            }
        }
    }


    formatNumber(number){
        return new Intl.NumberFormat().format(number);
    }

    formatCurrency(amount) {
        return new Intl.NumberFormat('en-US', { 
            style: 'currency', 
            currency: 'USD',
            minimumFractionDigits: 0,
            maximumFractionDigits:0
        }).format(amount);
    }
}

const dashboardService = new DashboardService();
const dashboard = new Dashboard(dashboardService);

dashboard.initialize();
 