class VehicleDTO {
    constructor({car_id, car_year, car_make, car_model, car_mileage, car_price}){

        this.car_id = car_id;
        this.car_year = car_year;
        this.car_make = car_make;
        this.car_model = car_model;
        this.car_mileage = car_mileage;
        this.car_price = car_price;

    }


    static fromData(data) {
        return new VehicleDTO({
            
            car_id: data.car_id,
            car_year: data.car_year,
            car_make: data.car_make,
            car_model: data.car_model,
            car_mileage: data.car_mileage,
            car_price: data.car_price

        });
    }

}

module.exports = VehicleDTO;