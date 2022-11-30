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
const tagModel = require("./models/tag");
const contactModel = require("./models/contact");


const sequelize = new Sequelize('phuongsoccer.com', 'root', '', {
  host: '127.0.0.1',
  dialect: 'mysql',
  logging: false,
  timezone:"+07:00"
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
const tag = tagModel(sequelize, DataTypes);
const contact = contactModel(sequelize, DataTypes);
role.hasMany(users, {
  foreignKey: "id_role",
});

users.hasMany(news, {
  foreignKey: "user_Updater",
});

users.hasMany(products_details, {
  foreignKey: "user_Updater",
});

users.hasMany(discount_code, {
  foreignKey: "user_Updater",
});

users.hasMany(products, {
  foreignKey: "user_Update",
});

users.hasMany(orders, {
  foreignKey: "id_buyer",
});

users.hasMany(cart, {
  foreignKey: "id_users",
});


products.hasMany(products_details, {
  foreignKey: "id_products",
});

products.hasMany(img, {
  foreignKey: "id_Products",
});

orders.hasMany(orders_details, {
  foreignKey: "id_order",
});

status.hasMany(orders, {
  foreignKey: "id_status",
});

products_details.hasMany(orders_details, {
  foreignKey: "id_products_details",
});

products_details.hasMany(cart, {
  foreignKey: "id_Products_details",
});

producer.hasMany(products, {
  foreignKey: "id_producer",
});

tag.hasMany(products, {
  foreignKey: "id_tag",
});

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
  products_details,
  tag,
  contact
};