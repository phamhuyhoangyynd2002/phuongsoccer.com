const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('contact', {
        name: {
            allowNull: false,
            type: DataTypes.STRING(1000),
        },
        email: {
            allowNull: true,
            type: DataTypes.STRING(1000),
        },
        phone_Number: {
            allowNull: false,
            type: DataTypes.STRING(20),
        },
        note: {
            allowNull: false,
            type: DataTypes.STRING(1000),
        },
        status: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            defaultValue: true,
        }
    }, {
        tableName: 'contact',
    });
};