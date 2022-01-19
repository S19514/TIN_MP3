const Magazyn = require("../../models/sequelize/Magazyn");
const Pracownik = require("../../models/sequelize/Pracownik");
const Firma = require("../../models/sequelize/Firma");

exports.getMagazyny = () => {
    return Magazyn.findAll();
};

exports.getMagazynById = (magId) => {
    return Magazyn.findByPk(magId,
        {
            include: [{
                model: Pracownik,
                as: 'pracownicy',
                include:[{
                    model: Firma,
                    as: 'firma'
                }]
            }]
        });
};

exports.createMagazyn = (newMagazynData) => {
    return Magazyn.create({        
        mag_kod: newMagazynData.mag_kod,
        mag_nazwa: newMagazynData.mag_nazwa,
        mag_krajPrefix: newMagazynData.mag_krajPrefix,
        mag_powierzchnia: newMagazynData.mag_powierzchnia,
        mag_iloscRegalow: newMagazynData.mag_iloscRegalow,
        mag_iloscPolozen: newMagazynData.mag_iloscPolozen,
        mag_iloscWozkow: newMagazynData.mag_iloscWozkow,
        mag_iloscHal: newMagazynData.mag_iloscHal,
        mag_iloscSkanerow: newMagazynData.mag_iloscSkanerow && !(/^\s*$/.test(newMagazynData.mag_iloscSkanerow)) ? newMagazynData.mag_iloscSkanerow : null
    });
   
};

exports.updateMagazyn = (magId, magData) => {
       const mag_kod = magData.mag_kod;
       const mag_nazwa = magData.mag_nazwa;
       const mag_krajPrefix = magData.mag_krajPrefix;
       const mag_powierzchnia = magData.mag_powierzchnia;
       const mag_iloscRegalow = magData.mag_iloscRegalow;
       const mag_iloscPolozen = magData.mag_iloscPolozen;
       const mag_iloscWozkow = magData.mag_iloscWozkow;
       const mag_iloscHal = magData.mag_iloscHal;              
       const mag_iloscSkanerow =  magData.mag_iloscSkanerow && !(/^\s*$/.test(magData.mag_iloscSkanerow)) && magData.mag_iloscSkanerow ===""  ? magData.mag_iloscSkanerow : null;   
            
      
       console.log('magIlSkan ' + JSON.stringify(magData));   
       return Magazyn.update(magData, {where: {mag_id: magId}});       
      
};

exports.deleteMagazyn = (magId) => {
    return Magazyn.destroy({
        where: {mag_id: magId}
    });

};