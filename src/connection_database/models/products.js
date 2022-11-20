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
            allowNull: false,
            type: DataTypes.STRING(1000),
          },
        _id_Producer: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
          },
        product_Image: {
            allowNull: false,
            type: DataTypes.STRING(1000),
          },
        sold: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
          },
        discount_max: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
          },
        discount_min: {
            allowNull: false,
            type: DataTypes.INTEGER(11),
          },
        code: {
            allowNull: false,
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