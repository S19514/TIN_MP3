const MagazynRepository = require('../repository/sequelize/MagazynRepository');
const PracownikRepository = require('../repository/sequelize/PracownikRepository');
const FirmaRepository = require('../repository/sequelize/FirmaRepository');
const authUtil = require('../util/authUtils.js'); //require('../../util/authUtils.js');



exports.showEmployeeList = (req, res, next) => {
    PracownikRepository.getPracownicy()
        .then(pracownicy => {
            res.render('pages/pracownik/list', {
                pracownicy: pracownicy,
                navLocation: 'prc'
            });
        });    
}

exports.showAddEmployeeForm = (req,res,next) => {      
        let allMagazyny, allFirmy;
        MagazynRepository.getMagazyny()
        .then( mag => {
            allMagazyny = mag;
            return FirmaRepository.getFirmy();
        })        
        .then( frm => {
            allFirmy = frm;
            res.render('pages/pracownik/form', {
                prc: {},
                formMode: 'createNew',
                pageTitle: 'Nowy pracownik',
                btnLabel: 'Dodaj pracownika',
                formAction: '/employees/add',        
                navLocation: 'prc',
                allMagazyny: allMagazyny,
                allFirmy: allFirmy,
                validationErrors: [] 
            });
    });
}

exports.showEditEmployeeForm = (req,res,next) => {
    const prcId = req.params.prcId;
    
    let allMagazyny, allFirmy;
    MagazynRepository.getMagazyny()
    .then( mag => {
        allMagazyny = mag;
        return FirmaRepository.getFirmy();
    })        
    .then( frm => {
        allFirmy = frm;
        return PracownikRepository.getPracownikById(prcId);
    })
    
        .then(prc => {          
            res.render('pages/pracownik/form', { 
                prc: prc,
                formMode: 'edit',
                pageTitle: 'Edycja pracownika',
                btnLabel: 'Edytuj pracownika',
                formAction: '/employees/edit',
                navLocation: 'prc',
                allMagazyny: allMagazyny,
                allFirmy: allFirmy,
                validationErrors: []              
            });
            
        });
};

exports.showEmployeeDetails = (req,res,next) => {
    const prcId = req.params.prcId;
    let allMagazyny, allFirmy;
    MagazynRepository.getMagazyny()
    .then( mag => {
        allMagazyny = mag;
        return FirmaRepository.getFirmy();
        
    })        
    .then( frm => {
        allFirmy = frm;
        return PracownikRepository.getPracownikById(prcId);
    })
    
        .then(prc => {
            res.render('pages/pracownik/form', { 
                prc: prc,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły pracownika',
                formAction:'',
                navLocation: 'prc',
                allMagazyny: allMagazyny,
                allFirmy: allFirmy,
                validationErrors: []            
            });
        }); 
}
exports.addEmployee = (req, res, next) => {
    const empData = { ...req.body };
    console.log(empData.password);
    const passHash = authUtil.hashPassword(empData.password);
    empData.password = passHash;
    let allMagazyny, allFirmy;
    MagazynRepository.getMagazyny()
    .then( mag => {
        allMagazyny = mag;
        return FirmaRepository.getFirmy();
        
    })        
    .then( frm => {
        allFirmy = frm;
        return PracownikRepository.createPracownik(empData);
    })    
        .then( result => {
            res.redirect('/employees');
        })
        .catch(err => {
            res.render('pages/pracownik/form', {
                prc: empData,
                pageTitle: 'Dodawanie pracownika',
                formMode: 'createNew',
                btnLabel: 'Dodaj pracownika',
                formAction: '/employees/add',
                navLocation: 'prc',
                allMagazyny: allMagazyny,
                allFirmy: allFirmy,
                validationErrors: err.errors
            });
        });
};

exports.updateEmployee = (req, res, next) => {
    const prcId = req.body.prc_id;
    const empData = { ...req.body };
    console.log(empData.password);
    const passHash = authUtil.hashPassword(empData.password);
    empData.password = passHash;

    if(empData.prc_dataUrodzenia)
        empData.prc_dataUrodzenia = new Date(empData.prc_dataUrodzenia);
    else
        empData.prc_dataUrodzenia = new Date();

    let allMagazyny, allFirmy;
    MagazynRepository.getMagazyny()
    .then( mag => {
        allMagazyny = mag;
        return FirmaRepository.getFirmy();        
    })        
    .then( frm => {
        allFirmy = frm;
        return PracownikRepository.updatePracownik(prcId, empData);
    }) 
    
        .then( result => {
            res.redirect('/employees');
        })
        .catch(err => {
            res.render('pages/pracownik/form', {
                prc: empData,
                pageTitle: 'Edycja pracownika',
                formMode: 'edit',
                btnLabel: 'Edytuj pracownika',
                formAction: '/employees/edit',
                navLocation: 'prc',
                allMagazyny: allMagazyny,
                allFirmy: allFirmy,
                validationErrors: err.errors                
            });
        });
};

exports.deleteEmployee = (req, res, next) => {
    const prcId = req.params.prcId;
    PracownikRepository.deletePracownik(prcId)
        .then( () => {
            res.redirect('/employees');
        });
};