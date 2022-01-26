const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Pracownik = sequelize.define('Pracownik',
{
    prc_id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    prc_imie:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
            len: {
                args:[2,150],
                msg: "Pole powinno zawierać od 2 do 150"
            },
        }
    },
    prc_nazwisko:{
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
    prc_dataUrodzenia:{
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Pole jest wymagane"
            },
          isDate: true
        }
    },
    prc_stanowisko:{
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
    prc_stanCywilny:{
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: {
                args:[0,100],
                msg: "Pole powinno zawierać od 2 do 100 znaków"
            },
        }
    },
    frm_id:{
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
    mag_id:{
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
password: {
    type: Sequelize.STRING,
    allowNull: false
},
IsAdmin: { 
    type: Sequelize.BOOLEAN,
    allowNull: false
}

});
module.exports = Pracownik;