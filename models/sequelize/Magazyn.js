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
                msg: "_REQ_"
            },
            len: {
                args:[2,25],
                msg: "_2_25_"
            },
        }
    },
    mag_nazwa:{
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
    mag_krajPrefix:{
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "_REQ_"
            },
            len: {
                args:[2,5],
                msg: "_2_5_"
            },
        }
    },
    mag_powierzchnia:{
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
    mag_iloscRegalow:{
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
    mag_iloscPolozen:{
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
    mag_iloscWozkow:{
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
    mag_iloscHal:{
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
    mag_iloscSkanerow:{
        type: Sequelize.INTEGER,
        allowNull: true,
        defaultValue: null,
        validate: {            
            min: {
                args: [1],
                msg: "_TOOSMALL_"
            },
            max:{
                args: [2147483647],
                msg: "_TOOBIG_"
            } 
        }
    }
});
module.exports = Magazyn;