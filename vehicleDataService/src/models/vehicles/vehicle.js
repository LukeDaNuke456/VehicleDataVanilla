const { Model, DataTypes } = require('sequelize');
const sequelize = require('../../config/carDataDb');


class Vehcile extends Model {}

Vehcile.init({
  car_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  car_year: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  car_make: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  car_model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  car_mileage: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  car_price: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, 
{
    sequelize,
    modelName: 'Vehicle',
    tableName: 'cars', // Make sure this matches your existing table name
    timestamps: false });

module.exports = Vehcile;
