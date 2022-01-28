const bcrypt = require('bcryptjs');
// const PracownikRepository = require('../repository/sequelize/PracownikRepository');
const PracownikRepository = require('../repository/sequelize/PracownikRepository.js');


const salt = bcrypt.genSaltSync(8);

exports.hashPassword = (passPlain) => {
    var passHashed=undefined;
    if(passPlain && passPlain.trim() != '')
        var passHashed = bcrypt.hashSync(passPlain,salt);

    return passHashed;
}

exports.comparePasswords = (passPlain, passHash) => {
    const res = bcrypt.compareSync(passPlain,passHash);
    return res;
}
exports.permitAuthenticatedUser = (req, res, next) => {
    const loggedUser = req.session.loggedUser;
    const prc_id = req.params.prcId;
    const mag_id = req.params.magId;
    const frm_id = req.params.frmId;
    var Prc = prc_id ? PracownikRepository.findPassById(prc_id) : undefined;   
    // if(Prc)
    //     console.log('JOSSSSSSSSSSSSSSSSSSSOOOOOOOOOONNNNNNNNNN '+JSON.stringify(Prc));

    if(loggedUser) {
        if(loggedUser.IsAdmin == true)
            next();        
        else if(loggedUser.IsAdmin == false && (prc_id  && (prc_id == loggedUser.prc_id )) 
                || (mag_id && mag_id == loggedUser.mag_id) 
                || (frm_id && frm_id == loggedUser.frm_id))
            next();
        else {
            // console.log('errlog');
            // console.log('prcid z forma'+prc_id);
            // console.log('magid Usera'+loggedUser.mag_id);
            // console.log('frmid Usera'+loggedUser.frm_id);
            // console.log('magid z forma'+Prc.mag_id);
            // console.log('frmid z forma'+Prc.frm_id);
            throw new Error('Invalid Permissions');
        }
    } else {
        throw new Error('Unauthorized Access');
    }
}














//solid bak

// const bcrypt = require('bcryptjs');

// const salt = bcrypt.genSaltSync(8);

// exports.hashPassword = (passPlain) => {
//     const passHashed = bcrypt.hashSync(passPlain,salt);
//     return passHashed;
// }

// exports.comparePasswords = (passPlain, passHash) => {
//     const res = bcrypt.compareSync(passPlain,passHash);
//     return res;
// }
// exports.permitAuthenticatedUser = (req, res, next) => {
//     const loggedUser = req.session.loggedUser;
//     const prc_id = req.params.prcId;//req.params.prcId;
//     console.log('sssssssssssssss' + prc_id + 'sssssssssssssssssssss');
//     if(loggedUser) {
//         next();        
//     } else {
//         throw new Error('unauthorized access');
//     }
// }