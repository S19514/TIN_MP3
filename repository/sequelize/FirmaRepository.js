const Magazyn = require("../../models/sequelize/Magazyn");
const Pracownik = require("../../models/sequelize/Pracownik");
const Firma = require("../../models/sequelize/Firma");

exports.getFirmy = () => {
    return Firma.findAll();
};

exports.getFirmaById = (frmId) => {
    return Firma.findByPk(frmId,
        {
            include: [{
                model: Pracownik,
                as: 'pracownicy',
                include:[{
                    model: Magazyn,
                    as: 'magazyn'
                }]
            }]
        });
};

exports.createFirma = (newFirmaData) => {
    return Firma.create({
        frm_nazwa: newFirmaData.frm_nazwa,
        frm_adres: newFirmaData.frm_adres,
        frm_kodP: newFirmaData.frm_kodP,
        frm_miasto: newFirmaData.frm_miasto,
        frm_krajPrefix: newFirmaData.frm_krajPrefix,
        frm_prezes: newFirmaData.frm_prezes
    });
};

exports.updateFirma = (frmId, frmData) => {
       const frm_nazwa = frmData.frm_nazwa;
       const frm_adres = frmData.frm_adres;
       const frm_kodP = frmData.frm_kodP;
       const frm_miasto = frmData.frm_miasto;
       const frm_krajPrefix = frmData.frm_krajPrefix;
       const frm_prezes = frmData.frm_prezes;
       return Firma.update(frmData, {where: {frm_id: frmId}});       
};

exports.deleteFirma = (frmId) => {
    return Firma.destroy({
        where: {frm_id: frmId}
    });

};