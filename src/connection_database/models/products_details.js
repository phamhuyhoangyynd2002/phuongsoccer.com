const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('products_details', {
        id_products: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        size: {
            allowNull: false,
            type: DataTypes.STRING(10),
        },
        amount: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        out_price: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        discout_percent: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        discount_minus: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        users_Updater: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
    }, {
        tableName: 'products_details',
    });
};
