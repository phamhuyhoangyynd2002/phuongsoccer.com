const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('discount_code', {
        user_Updater: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        start_time: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        end_time: {
            allowNull: false,
            type: DataTypes.DATE,
        },
        discount_Percent: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        discount_Minus: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        minimun_order_value: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        minimize: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
    }, {
        tableName: 'discount_code',
    });
};