const path = require('path');
const Model = require('../models');

const createPath = (page) => path.resolve(__dirname, '../../public', `${page}.ejs`);
const updateFolderPath = path.join(__dirname, '..', 'updates');
console.log(updateFolderPath);

exports.check_updates = async (req, res) => {
    res.json({"version": process.env.CURRENT_VERSION});
}

exports.upload_update = async (req, res) => {
    const { version } = req.params;
    console.log(version);
    const filePath = path.join(updateFolderPath, `update-${version}.zip`);
    console.log(filePath);
    res.sendFile(filePath, (err) => {
        if (err) {
            console.log('Error sending file:', err);
            res.status(404).json({ message: 'Update file not found' });
        }
    });
};

exports.getOrderLine = async (req, res) => {
    
}

exports.getOrderById = async (req, res) => {
    
}

exports.getPricelist = async (req, res) => {
    
}