// const Sequelize = require('sequelize');
// const sequelize = require('../../config/sequelize/sequelize');

// const User = sequelize.define('User',
// {
//     usr_id:{
//         type: Sequelize.INTEGER,
//         autoIncrement: true,
//         allowNull: false,
//         primaryKey: true,
//     },
//     usr_email:{
//         type: Sequelize.STRING,
//         allowNull: false,
//         validate: {
//             notEmpty: {
//                 msg: "Pole jest wymagane"
//             },
//             len: {
//                 args:[2,150],
//                 msg: "Pole powinno zawierać od 2 do 150"
//             },
//         }
//     },
//     password: {
//         type: Sequelize.STRING,
//         allowNull: false
//     }   

// });
// module.exports = User;