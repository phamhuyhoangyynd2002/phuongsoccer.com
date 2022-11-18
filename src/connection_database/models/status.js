const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('status', {
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'status',
    });
};