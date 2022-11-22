const { Sequelize } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Producer', {
    name: {
        allowNull: false,
        type: DataTypes.STRING(500),
    },
    description: {
        allowNull: false,
        type: DataTypes.STRING(10000),
    },
}, {
    tableName: 'producer',
});
}