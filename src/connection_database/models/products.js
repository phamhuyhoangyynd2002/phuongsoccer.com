const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define(
      'products', 
      {
        name: {
            allowNull: false,
            type: DataTypes.STRING(1000),
          },
        description: {
            allowNull: true,
            type: DataTypes.STRING(10000),
          },
        id_producer: {
          allowNull: false,
          type: DataTypes.INTEGER(11),
          },
        id_tag: {
          allowNull: false,
          type: DataTypes.INTEGER(11),
          },
        product_Image: {
            allowNull: true,
            type: DataTypes.STRING(1000),
          },
        sold: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
            defaultValue: 0
          },
        discount_max: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
            defaultValue: 0,
          },
        discount_min: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
            defaultValue: 1000000000,
          },
        code: {
            allowNull: true,
            type: DataTypes.STRING,
           },
        user_Update: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
        }
      }, 
    {
        tableName: 'products'
    });
};