const Sequelize = require('sequelize');
const { Op } = require('sequelize');

const sequelize = new Sequelize('easyresto', 'root', '', {
    dialect: "mysql",
    host: process.env.DATABASE_HOST,
    port: process.env.DATABASE_PORT,
    logging: false
});

const customers = require('./customers-model')(sequelize);


module.exports = {
    customers: customers,
    Op: Op
}