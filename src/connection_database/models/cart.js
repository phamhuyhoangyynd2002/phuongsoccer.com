const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('cart', {
        id_users: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
          },
        id_Products_details: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
          },
        amount: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
          }
    }, {
        tableName: 'cart',
    });
};