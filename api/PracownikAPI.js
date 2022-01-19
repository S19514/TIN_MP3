const PracownikRepository = require('../repository/sequelize/PracownikRepository');

exports.getPracownicy = (req, res, next) => {
    PracownikRepository.getPracownicy()
       .then(pracownicy => {
           res.status(200).json(pracownicy);
       })
       .catch(err => {
           console.log(err);
       });  
};
exports.getPracownikById = (req, res, next) => {
    const prcId = req.params.prcId;
    PracownikRepository.getPracownikById(prcId)
       .then(prc => {
           if(!prc) {
               res.status(404).json({
                   message: 'Pracownik with id: '+prcId+' not found'
               })
           } else {
               res.status(200).json(prc);
           }
       });
};

exports.createPracownik = (req, res, next) => {
    PracownikRepository.createPracownik(req.body)
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

exports.updatePracownik = (req, res, next) => {
    const prcId = req.params.prcId;
    PracownikRepository.updatePracownik(prcId, req.body)
       .then(result => {
           res.status(200).json({message: 'Pracownik updated!', prc: result});
       })
       .catch(err => {
           if (!err.statusCode) {
               err.statusCode = 500;
           }
           next(err);
       });
};

exports.deletePracownik = (req, res, next) => {
    const prcId = req.params.prcId;
    PracownikRepository.deletePracownik(prcId)
       .then(result => {
           res.status(200).json({message: 'Removed Pracownik', prc: result});
       })
       .catch(err => {
           if(!err.statusCode) {
               err.statusCode = 500;
           }
           next(err);
       });
};