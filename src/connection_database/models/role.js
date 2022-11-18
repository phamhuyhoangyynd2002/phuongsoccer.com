const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('role', {
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'role',
    });
};