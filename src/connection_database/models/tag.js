const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('tag', {
        name: {
            allowNull: false,
            type: DataTypes.STRING(10000),
          }
    }, {
        tableName: 'tag',
    });
};