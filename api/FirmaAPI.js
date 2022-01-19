const FirmaRepository = require('../repository/sequelize/FirmaRepository');

exports.getFirmy = (req, res, next) => {
    FirmaRepository.getFirmy()
       .then(firmy => {
           res.status(200).json(firmy);
       })
       .catch(err => {
           console.log(err);
       });  
};
exports.getFirmaById = (req, res, next) => {
    const frmId = req.params.frmId;
    FirmaRepository.getFirmaById(frmId)
       .then(frm => {
           if(!frm) {
               res.status(404).json({
                   message: 'Firma with id: '+frmId+' not found'
               })
           } else {
               res.status(200).json(frm);
           }
       });
};

exports.createFirma = (req, res, next) => {
    FirmaRepository.createFirma(req.body)
       .then(newObj => {
           res.status(201).json(newObj);
       })
       .catch(err => {
           if (!err.statusCode) {
               err.statusCode = 500;
           }
           next(err);
       });
};

exports.updateFirma = (req, res, next) => {
    const frmId = req.params.frmId;
    FirmaRepository.updateFirma(frmId, req.body)
       .then(result => {
           res.status(200).json({message: 'Firma updated!', frm: result});
       })
       .catch(err => {
           if (!err.statusCode) {
               err.statusCode = 500;
           }
           next(err);
       });
};

exports.deleteFirma = (req, res, next) => {
    const frmId = req.params.frmId;
    FirmaRepository.deleteFirma(frmId)
       .then(result => {
           res.status(200).json({message: 'Removed Firma', frm: result});
       })
       .catch(err => {
           if(!err.statusCode) {
               err.statusCode = 500;
           }
           next(err);
       });
};