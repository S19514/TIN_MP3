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
        pageTitle: req.__('mag.form.add.pageTitle'), // 'Nowy magazyn',
        formMode: 'createNew',
        btnLabel: req.__('mag.form.add.btnLabel'),//'Dodaj magazyn',
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
                pageTitle:  req.__('mag.form.edit.pageTitle'), //'Edycja magazynu',
                btnLabel: req.__('mag.form.edit.btnLabel'),//'Edytuj magazyn',
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
                pageTitle: req.__('mag.form.details.pageTitle'), // 'Szczegóły magazynu',
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
            for(let i=0; i<err.errors.length; i++)
            {
                    err.errors[i].message = req.__('mag.db.errs.'+err.errors[i].message);
            }
            res.render('pages/magazyn/form', {               
                mag: magData,
                pageTitle:  req.__('mag.form.add.pageTitle'), //'Dodawanie magazynu',
                formMode: 'createNew',
                btnLabel: req.__('mag.form.add.btnLabel'),// 'Dodaj magazyn',
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
            for(let i=0; i<err.errors.length; i++)
            {
                    err.errors[i].message = req.__('mag.db.errs.'+err.errors[i].message);
            }
            res.render('pages/magazyn/form', {               
                mag: magData,                
                pageTitle:  req.__('mag.form.edit.pageTitle'), //'Edycja magazynu',
                formMode: 'edit',
                btnLabel: req.__('mag.form.edit.btnLabel'),//'Edytuj magazyn',
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