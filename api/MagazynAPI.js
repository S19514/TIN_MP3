 const MagazynRepository = require('../repository/sequelize/MagazynRepository');

 exports.getMagazyny = (req, res, next) => {
     MagazynRepository.getMagazyny()
        .then(magazyny => {
            res.status(200).json(magazyny);
        })
        .catch(err => {
            console.log(err);
        });  
 };
 exports.getMagazynById = (req, res, next) => {
     const magId = req.params.magId;
     MagazynRepository.getMagazynById(magId)
        .then(mag => {
            if(!mag) {
                res.status(404).json({
                    message: 'Magazyn with id: '+magId+' not found'
                })
            } else {
                res.status(200).json(mag);
            }
        });
 };

 exports.createMagazyn = (req, res, next) => {
     console.log(req.body);
     MagazynRepository.createMagazyn(req.body)
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

 exports.updateMagazyn = (req, res, next) => {
     const magId = req.params.magId;
     MagazynRepository.updateMagazyn(magId, req.body)
        .then(result => {
            res.status(200).json({message: 'Magazyn updated!', mag: result});
        //   res.status(200).json({message: 'Magazyn updated!', mag: req.body});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
 };

 exports.deleteMagazyn = (req, res, next) => {
     const magId = req.params.magId;
     MagazynRepository.deleteMagazyn(magId)
        .then(result => {
            res.status(200).json({message: 'Removed Magazyn', mag: result});
        })
        .catch(err => {
            if(!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
 };