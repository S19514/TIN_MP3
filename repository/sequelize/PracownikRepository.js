const Sequelize = require('sequelize');

const Magazyn = require("../../models/sequelize/Magazyn");
const Pracownik = require("../../models/sequelize/Pracownik");
const Firma = require("../../models/sequelize/Firma");

exports.getPracownicy = () => {
    return Pracownik.findAll({include: [
        {
            model: Magazyn,
            as: 'magazyn'
        },
        {
            model: Firma,
            as: 'firma'
        }]
    });
};

exports.getPracownikById = (pracownikId) => {
    return Pracownik.findByPk(pracownikId, {include: [
        {
            model: Magazyn,
            as: 'magazyn'
        },
        {
            model: Firma,
            as: 'firma'
        }]
    });
};

exports.createPracownik = (data) => {
    console.log(JSON.stringify(data));


    return Pracownik.create({
        prc_imie: data.prc_imie,
        prc_nazwisko: data.prc_nazwisko,
        prc_dataUrodzenia: data.prc_dataUrodzenia,
        prc_stanowisko: data.prc_stanowisko,
        prc_stanCywilny: data.prc_stanCywilny,
        frm_id: data.frm_id,
        mag_id: data.mag_id,
        password: data.password,
        IsAdmin: data.IsAdmin ? data.IsAdmin : false
    });
};

exports.updatePracownik = (pracownikId, data) => {
    data.IsAdmin = data.IsAdmin ? data.IsAdmin : false;
    return Pracownik.update(data, {where: {prc_id: pracownikId}});
}

exports.deletePracownik = (pracownikId) => {
    return Pracownik.destroy({
        where: {prc_id: pracownikId}
    });
}

exports.deleteWieluPracownikow = (pracownikIdki) => {
    return Pracownik.find({ prc_id: { [Sequelize.Op.in]: pracownikIdki }})
}
exports.findByCredentials = (imie,nazwisko) =>  {
    return Pracownik.findOne({
        where: {prc_imie: imie,prc_nazwisko: nazwisko }
    });
}
exports.findPassById = (pracownikId) =>  {
    return Pracownik.findOne({
        where: {prc_id: pracownikId}
    });
}