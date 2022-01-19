const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Firma = sequelize.define('Firma',
{
    frm_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    frm_nazwa:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args:[2,150],
                msg: "Pole powinno zawierać od 2 do 150 znaków"
            },
        }
    },
    frm_adres:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args:[2,150],
                msg: "Pole powinno zawierać od 2 do 150 znaków"
            },
        }
    },
    frm_kodP:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args:[2,20],
                msg: "Pole powinno zawierać od 2 do 20 znaków"
            },
        }
    },
    frm_miasto:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args:[2,150],
                msg: "Pole powinno zawierać od 2 do 150 znaków"
            },
        }
    },
    frm_krajPrefix:{
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
    frm_prezes:{
        type: Sequelize.STRING,
        allowNull: true,
        validate: {        
            len: {
                args:[0,150],
                msg: "Pole powinno zawierać od 0 do 150 znaków"
            },
        }
    }
});
module.exports = Firma;