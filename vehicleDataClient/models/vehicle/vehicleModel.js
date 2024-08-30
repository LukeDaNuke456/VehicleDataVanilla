class Vehicle {
    
    constructor ( car_id, car_year, car_make, car_model, car_mileage, car_price) {
        
        this.car_id = car_id;
        this.car_year = car_year;
        this.car_make = car_make;
        this.car_model = car_model;
        this.car_mileage = car_mileage;
        this.car_price = car_price;    
        
    }

    getVehicleDetails() {
        
        return {
            
            car_id: this.car_id, 
            car_year: this.car_year, 
            car_make: this.car_make,
            car_model: this.car_model, 
            car_mileage: this.car_mileage,
            car_price: this.car_price
        
        };
    }

    static fromVehicleData(data) {
        return new Vehicle (data.car_id, data.car_year, data.car_make,
            data.car_model, data.car_mileage, data.car_price
        )
    }

}


export default Vehicle;