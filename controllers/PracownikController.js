const MagazynRepository = require('../repository/sequelize/MagazynRepository');
const PracownikRepository = require('../repository/sequelize/PracownikRepository');
const FirmaRepository = require('../repository/sequelize/FirmaRepository');
const authUtil = require('../util/authUtils.js'); //require('../../util/authUtils.js');
const e = require('express');



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
                pageTitle: req.__('prc.form.add.pageTitle'), //'Nowy pracownik',
                btnLabel: req.__('prc.form.add.btnLabel'),
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
                pageTitle: req.__('prc.form.edit.pageTitle'), //'Edycja pracownika',
                btnLabel:  req.__('prc.form.edit.btnLabel'),
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
                pageTitle: req.__('prc.form.details.pageTitle'), //'Szczegóły pracownika',
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
                pageTitle: req.__('prc.form.add.pageTitle'), //'Dodawanie pracownika',
                formMode: 'createNew',
                btnLabel: req.__('prc.form.add.btnLabel'),
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
    const EmpData2Com = PracownikRepository.findPassById(prcId);
    var passHash = undefined;
    console.log(empData.password);
    if(EmpData2Com.passsword != empData.passsword)
    {
         passHash = authUtil.hashPassword(empData.password);
        empData.password = passHash;
    }
    else
        empData.password = EmpData2Com.password;

    if(empData.prc_dataUrodzenia)
        empData.prc_dataUrodzenia = new Date(empData.prc_dataUrodzenia);
    else
        empData.prc_dataUrodzenia = new Date();

        console.log('IS ADMIN OR NO: ' +empData.IsAdmin);

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
                pageTitle: req.__('prc.form.edit.pageTitle'), //'Edycja pracownika',
                formMode: 'edit',
                btnLabel: req.__('prc.form.edit.btnLabel'),//'Edytuj pracownika',
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