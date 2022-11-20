const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('news', {
        title: {
            allowNull: false,
            type: DataTypes.STRING(1000),
        },
        author: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        description: {
            allowNull: false,
            type: DataTypes.STRING(10000),
        },
        image: {
            allowNull: false,
            type: DataTypes.STRING(100),
        },
        user_Updater: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
    }, {
        tableName: 'news',
    });
};