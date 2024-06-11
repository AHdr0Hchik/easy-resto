// models/customer.js
'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    static associate(models) {
      // Определите ассоциации здесь
    }
  }
  Customer.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      request_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      sid: {
        type: DataTypes.STRING(64),
        allowNull: false,
      },
      actually: {
        type: DataTypes.TINYINT,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'customers',
      tableName: 'customers',
      timestamps: false, // Если нет полей createdAt и updatedAt
    }
  );
  return Customer;
};