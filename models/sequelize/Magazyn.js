const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Magazyn = sequelize.define('Magazyn',
{
    mag_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    mag_kod:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args:[2,25],
                msg: "Pole powinno zawierać od 2 do 25 znaków"
            },
        }
    },
    mag_nazwa:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args:[2,100],
                msg: "Pole powinno zawierać od 2 do 100 znaków"
            },
        }
    },
    mag_krajPrefix:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args:[2,5],
                msg: "Pole powinno zawierać od 2 do 5 znaków"
            },
        }
    },
    mag_powierzchnia:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            min: {
                args: [1],
                msg: "Wartość jest zbyt mała"
            },
            max:{
                args: [2147483647],
                msg: "Wartość jest zbyt duża"
            } 
        }
    },
    mag_iloscRegalow:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            min: {
                args: [1],
                msg: "Wartość jest zbyt mała"
            },
            max:{
                args: [2147483647],
                msg: "Wartość jest zbyt duża"
            } 
        }
    },
    mag_iloscPolozen:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            min: {
                args: [1],
                msg: "Wartość jest zbyt mała"
            },
            max:{
                args: [2147483647],
                msg: "Wartość jest zbyt duża"
            } 
        }
    },
    mag_iloscWozkow:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            min: {
                args: [1],
                msg: "Wartość jest zbyt mała"
            },
            max:{
                args: [2147483647],
                msg: "Wartość jest zbyt duża"
            } 
        }
    },
    mag_iloscHal:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            min: {
                args: [1],
                msg: "Wartość jest zbyt mała"
            },
            max:{
                args: [2147483647],
                msg: "Wartość jest zbyt duża"
            } 
        }
    },
    mag_iloscSkanerow:{
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
        validate: {            
            min: {
                args: [1],
                msg: "Wartość jest zbyt mała"
            },
            max:{
                args: [2147483647],
                msg: "Wartość jest zbyt duża"
            } 
        }
    }
});
module.exports = Magazyn;