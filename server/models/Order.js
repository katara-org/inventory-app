const { Model, DataTypes } = require("sequelize");
const sequelize = require("../db");
const User = require("./User");

class Order extends Model {}

Order.init(
  {
    status: {
      type: DataTypes.ENUM("pending", "completed"),
      defaultValue: "pending",
      allowNull: false,
      validate: {
        isIn: {
          args: [["pending", "completed"]],
          msg: "Status must be either 'pending' or 'completed'",
        },
      },
    },
  },
  {
    sequelize,
    modelName: "order",
  }
);


module.exports = Order;
