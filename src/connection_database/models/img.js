const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('img', {
        _id_Products: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        },
        image_path: {
            allowNull: false,
            type: DataTypes.STRING(1000),
        },
    }, {
        tableName: 'img',
    });
};