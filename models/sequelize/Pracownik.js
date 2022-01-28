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
                msg: "_REQ_"
            },
            len: {
                args:[2,150],
                msg: "_2_150_"
            },
        }
    },
    prc_nazwisko:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "_REQ_"
            },
            len: {
                args:[2,150],
                msg: "_2_150_"
            },
        }
    },
    prc_dataUrodzenia:{
        type: Sequelize.DATE,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "_REQ_"
            },
          isDate: true
        }
    },
    prc_stanowisko:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "_REQ_"
            },
            len: {
                args:[2,100],
                msg: "_2_100_"
            },
        }
    },
    prc_stanCywilny:{
        type: Sequelize.STRING,
        allowNull: true,
        validate: {
            len: {
                args:[0,100],
                msg: "_0_100_"
            },
        }
    },
    frm_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "_REQ_"
            },
            min: {
                args: [1],
                msg: "_TOOSMALL_"
            },
            max:{
                args: [2147483647],
                msg: "_TOOBIG_"
            } 
        }
    },
    mag_id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "_REQ_"
            },
            min: {
                args: [1],
                msg: "_TOOSMALL_"
            },
            max:{
                args: [2147483647],
                msg: "_TOOBIG_"
            } 
    }
},
password: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
        notEmpty: {
            msg: "_REQ_"
        }    
    }
},
IsAdmin: { 
    type: Sequelize.BOOLEAN,
    allowNull: false
}

});
module.exports = Pracownik;