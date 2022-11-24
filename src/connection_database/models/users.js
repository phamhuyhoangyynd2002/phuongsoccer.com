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
            allowNull: true,
            type: DataTypes.INTEGER(11),
        },
        id_role: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
            defaultValue: 1,
        },
        picture: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        sub: {
            allowNull: true,
            type: DataTypes.STRING,
        },
    }, {
        tableName: 'users',
    });
};