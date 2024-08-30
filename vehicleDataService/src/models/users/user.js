const { Model, DataTypes, STRING } = require('sequelize');
const carDataDb = require('../../config/carDataDb');
const sequelize = require('../../config/carDataDb');
const { tableName } = require('../vehicles/vehicle');


class User extends Model { }

User.init({
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        unique: true
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password_hash: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    }, 
    role: {
        type: DataTypes.STRING,
        allowNull: false
    }

},
    {
        sequelize,
        modelName: 'User',
        tableName: 'users',
        timestamps: true
    })

module.exports = User;