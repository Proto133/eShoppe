const { DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    category_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    freezeTableName: true,
    timestamps: false,
    underscored: true,
    modelName: 'Category',
});

module.exports = Category;