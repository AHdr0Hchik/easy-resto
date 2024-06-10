const path = require('path');
const Model = require('../models');

const createPath = (page) => path.resolve(__dirname, '../../public', `${page}.ejs`);

exports.check_updates = async (req, res) => {
    console.log('123');
    return res.json({"Success!" : "Вы вошли в систему!"});
}

exports.getOrders = async (req, res) => {
    
}

exports.getOrderLine = async (req, res) => {
    
}

exports.getOrderById = async (req, res) => {
    
}

exports.getPricelist = async (req, res) => {
    
}