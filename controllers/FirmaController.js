const e = require('express');
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
        pageTitle: req.__('frm.form.add.pageTitle'), //'Nowa firma',
        formMode: 'createNew',
        btnLabel: req.__('frm.form.add.btnLabel'),//'Dodaj firmę',
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
                pageTitle: req.__('frm.form.edit.pageTitle'), //'Edycja firmy',
                btnLabel: req.__('frm.form.edit.btnLabel'),//'Edytuj firmę',
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
                pageTitle: req.__('frm.form.details.pageTitle'), //'Szczegóły firmy',
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
            for(let i=0; i<err.errors.length; i++)
            {
                    err.errors[i].message = req.__('frm.db.errs.'+err.errors[i].message);
            }
        
            res.render('pages/firma/form', {
                frm: frmData,
                pageTitle: req.__('frm.form.add.pageTitle'), //'Dodawanie firmy',
                formMode: 'createNew',
                btnLabel: req.__('frm.form.add.btnLabel'),//'Dodaj firmę',
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
            for(let i=0; i<err.errors.length; i++)
            {
                    err.errors[i].message = req.__('frm.db.errs.'+err.errors[i].message);
            }
            res.render('pages/firma/form', {
                frm: frmData,
                pageTitle: req.__('frm.form.edit.pageTitle'), //'Edycja firmy',
                formMode: 'edit',
                btnLabel: req.__('frm.form.edit.btnLabel'),//'Edytuj firmę',
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




