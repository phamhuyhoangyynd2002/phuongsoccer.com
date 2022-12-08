const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('products_details', {
        id_products: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        size: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        amount: {
            allowNull: true,
            type: DataTypes.INTEGER(11),
            defaultValue: 0,
        },
        price: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        discout_percent: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
            defaultValue: 0,
        },
        discount_minus: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
            defaultValue: 0,
        },
        user_Updater: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
    }, {
        tableName: 'products_details',
    });
};
