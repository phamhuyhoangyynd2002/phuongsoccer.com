const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('users', {
        email: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        name: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        phone_Number: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        role: {
            allowNull: false,
            type: DataTypes.STRING,
            defaultValue: 1,
        },
        picture: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        sub: {
            allowNull: false,
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'users',
    });
};