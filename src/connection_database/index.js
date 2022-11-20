const { Sequelize, DataTypes } = require("sequelize");
const usersModel = require("./models/users");
const imgModel = require("./models/img");
const newsModel = require("./models/news");
const ordersModel = require("./models/orders");
const roleModel = require("./models/role");
const statusModel = require("./models/status");
const cartModel = require("./models/cart");
const productsModel = require("./models/products");
const discount_codeModel = require("./models/discount_code");
const orders_detailsModel = require("./models/orders_details");
const producerModel = require("./models/producer");
const products_detailsModel = require("./models/products_details");

const sequelize = new Sequelize('phuongsoccer.com', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false
});

(async () => await sequelize.sync({ alter: true }))();

const users = usersModel(sequelize, DataTypes);
const img = imgModel(sequelize, DataTypes);
const news = newsModel(sequelize, DataTypes);
const orders = ordersModel(sequelize, DataTypes);
const role = roleModel(sequelize, DataTypes);
const status = statusModel(sequelize, DataTypes);
const cart = cartModel(sequelize, DataTypes);
const products = productsModel(sequelize, DataTypes);
const discount_code= discount_codeModel(sequelize, DataTypes);
const orders_details= orders_detailsModel(sequelize, DataTypes);
const producer= producerModel(sequelize, DataTypes);
const products_details= products_detailsModel(sequelize, DataTypes);
module.exports = {
  users,
  img,
  news,
  orders,
  role,
  status,
  cart,
  products,
  discount_code,
  orders_details,
  producer,
  products_details
};