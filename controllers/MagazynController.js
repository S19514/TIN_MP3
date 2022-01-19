const MagazynRepository = require('../repository/sequelize/MagazynRepository');

exports.showWarehouseList = (req, res, next) => {
    MagazynRepository.getMagazyny()
        .then(magazyny => {
            res.render('pages/magazyn/list', {
                magazyny: magazyny,
                navLocation: 'mag'
            });
        });    
}

exports.showAddWarehouseForm = (req,res,next) => {
    res.render('pages/magazyn/form', {
        mag: {},
        pageTitle: 'Nowy magazyn',
        formMode: 'createNew',
        btnLabel: 'Dodaj magazyn',
        formAction: '/warehouses/add',        
        navLocation: 'mag' ,
        validationErrors: []
    });
}
exports.showEditWarehouseForm = (req,res,next) => {
    const magId = req.params.magId;
    MagazynRepository.getMagazynById(magId)
        .then(mag => {          
            res.render('pages/magazyn/form', { 
                mag: mag,
                formMode: 'edit',
                pageTitle: 'Edycja magazynu',
                btnLabel: 'Edytuj magazyn',
                formAction: '/warehouses/edit',
                navLocation: 'mag' ,
                validationErrors: []
            });
        });
};

exports.showWarehouseDetails = (req,res,next) => {
    const magId = req.params.magId;
    MagazynRepository.getMagazynById(magId)
        .then(mag => {
            res.render('pages/magazyn/form', { 
                mag: mag,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły magazynu',
                formAction:'',
                navLocation: 'mag',
                validationErrors: []
            });
        });   
}

exports.addWarehouse = (req, res, next) => {
    const magData = { ...req.body };
    MagazynRepository.createMagazyn(magData)
        .then( result => {
            res.redirect('/warehouses');
        })
        .catch(err => {
            res.render('pages/magazyn/form', {               
                mag: magData,
                pageTitle: 'Dodawanie magazynu',
                formMode: 'createNew',
                btnLabel: 'Dodaj magazyn',
                formAction: '/warehouses/add',
                navLocation: 'mag',
                validationErrors: err.errors
            });
        });
};

exports.updateWarehouse = (req, res, next) => {
    const magId = req.body.mag_id;
    const magData = { ...req.body };
    MagazynRepository.updateMagazyn(magId, magData)
        .then( result => {
            res.redirect('/warehouses');
        })
        .catch(err => {
            res.render('pages/magazyn/form', {               
                mag: magData,                
                pageTitle: 'Edycja magazynu',
                formMode: 'edit',
                btnLabel: 'Edytuj magazyn',
                formAction: '/warehouses/edit',
                navLocation: 'mag',
                validationErrors: err.errors
            });
        });
};

exports.deleteWarehouse = (req, res, next) => {
    const magId = req.params.magId;
    MagazynRepository.deleteMagazyn(magId)
        .then( () => {
            res.redirect('/warehouses');
        });
};