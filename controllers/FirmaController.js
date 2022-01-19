const Firma = require('../models/sequelize/Firma');
const FirmaRepository = require('../repository/sequelize/FirmaRepository');

exports.showCompanyList = (req, res, next) => {
    FirmaRepository.getFirmy()
        .then(firmy => {
            res.render('pages/firma/list', {
                firmy: firmy,
                navLocation: 'frm'
            });
        });    
}

exports.showAddCompanyForm = (req,res,next) => {
    res.render('pages/firma/form', {
        frm: {},
        pageTitle: 'Nowa firma',
        formMode: 'createNew',
        btnLabel: 'Dodaj firmę',
        formAction: '/companies/add',        
        navLocation: 'frm',
        validationErrors: [] 
    });
}
exports.showEditCompanyForm = (req,res,next) => {
    const frmId = req.params.frmId;
    FirmaRepository.getFirmaById(frmId)
        .then(frm => {          
            res.render('pages/firma/form', { 
                frm: frm,
                formMode: 'edit',
                pageTitle: 'Edycja firmy',
                btnLabel: 'Edytuj firmę',
                formAction: '/companies/edit',
                navLocation: 'frm' ,
                validationErrors: []
            });
        });
};

exports.showCompanyDetails = (req,res,next) => {
    const frmId = req.params.frmId;
    FirmaRepository.getFirmaById(frmId)
        .then(frm => {
            res.render('pages/firma/form', { 
                frm: frm,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły firmy',
                formAction:'',
                navLocation: 'frm',
                validationErrors: []
            });
        });    
}

exports.addCompany = (req, res, next) => {
    const frmData = { ...req.body };
    FirmaRepository.createFirma(frmData)
        .then( result => {
            res.redirect('/companies');
        })
        .catch(err => {
            res.render('pages/firma/form', {
                frm: frmData,
                pageTitle: 'Dodawanie firmy',
                formMode: 'createNew',
                btnLabel: 'Dodaj firmę',
                formAction: '/companies/add',
                navLocation: 'frm',
                validationErrors: err.errors
            });
        });
};
exports.updateCompany = (req, res, next) => {
    const frmId = req.body.frm_id;
    const frmData = { ...req.body };
    FirmaRepository.updateFirma(frmId, frmData)
        .then( result => {
            res.redirect('/companies');
        })
        .catch(err => {
            res.render('pages/firma/form', {
                frm: frmData,
                pageTitle: 'Edycja firmy',
                formMode: 'edit',
                btnLabel: 'Edytuj firmę',
                formAction: '/companies/edit',
                navLocation: 'frm',
                validationErrors: err.errors
            });
        });
};
exports.deleteCompany = (req, res, next) => {
    const frmId = req.params.frmId;
    FirmaRepository.deleteFirma(frmId)
        .then( () => {
            res.redirect('/companies');
        });
};




