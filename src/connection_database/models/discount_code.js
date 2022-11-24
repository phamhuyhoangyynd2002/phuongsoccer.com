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
            defaultValue: 0,
        },
        discount_Minus: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
            defaultValue: 0,
        },
        minimun_order_value: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        code: {
            allowNull: false,
            type: DataTypes.STRING(1000),
        },
    }, {
        tableName: 'discount_code',
    });
};