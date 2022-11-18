const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('orders', {
        _id_buyer: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        address: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        buyer_name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        phone_Number: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        note: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        cash_payment: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        _id_status: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
    }, {
        tableName: 'orders',
    });
};