const Sequelize = require('sequelize');

const sequelize = new Sequelize('tin-s19514-Logifirm-sequelize','root','',
{
    dialect:'mysql',
    host: 'localhost'    
});

module.exports = sequelize; 