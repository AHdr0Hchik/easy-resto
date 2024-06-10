const Sequelize = require('sequelize');

module.exports = function(sequelize) { 
    return sequelize.define('customers', {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: true,
        },
        request_id: {
            type: Sequelize.INTEGER,
            allowNull: false
        },
        sid: {
            type: Sequelize.CHAR,
            allowNull: false
        },
        actually: {
            type: Sequelize.TINYINT,
            allowNull: true
        }
    }, 
    {
        timestamps: false,
        tablename: 'customers',
        freezeTableName: true
    });
}