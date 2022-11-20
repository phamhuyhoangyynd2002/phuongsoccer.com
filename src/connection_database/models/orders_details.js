const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('orders_details', {
        id_order: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        id_products_details: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        out_price: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        amount: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
    }, {
        tableName: 'orders_details',
    });
};
