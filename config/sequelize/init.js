const sequelize = require('./sequelize');

const Pracownik = require('../../models/sequelize/Pracownik');
const Firma = require('../../models/sequelize/Firma');
const Magazyn = require('../../models/sequelize/Magazyn');

module.exports = () => {
    Magazyn.hasMany(Pracownik, {as:'pracownicy', foreignKey: {name: 'mag_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'})
    Pracownik.belongsTo(Magazyn, {as: 'magazyn',foreignKey: {name: 'mag_id', allowNull: false} } );
    Firma.hasMany(Pracownik, {as:'pracownicy', foreignKey: {name: 'frm_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'})
    Pracownik.belongsTo(Firma, {as: 'firma',foreignKey: {name: 'frm_id', allowNull: false} } );

let wszystkieMagazyny, wszystkieFirmy;
return sequelize
    .sync({force: true})
    .then( () => {
        return Magazyn.findAll();
    })
    .then(magazyny => {
        if( !magazyny || magazyny.length == 0) {
            return Magazyn.bulkCreate([
                {   mag_kod: 'MAG', mag_nazwa: 'Magazyn główny', mag_krajPrefix: 'PL', mag_powierzchnia: 5000, mag_iloscRegalow: 100, mag_iloscPolozen: 2310, mag_iloscWozkow: 150, mag_iloscHal: 5, mag_iloscSkanerow: 230  },
                {   mag_kod: 'SUR', mag_nazwa: 'Magazyn surowców', mag_krajPrefix: 'PL', mag_powierzchnia: 7000, mag_iloscRegalow: 200, mag_iloscPolozen: 2930, mag_iloscWozkow: 213, mag_iloscHal: 6, mag_iloscSkanerow: 180  },
                {   mag_kod: 'DOWYJ', mag_nazwa: 'Magazyn rzeczy do wyjaśnienia', mag_krajPrefix: 'PL', mag_powierzchnia: 2000, mag_iloscRegalow: 100, mag_iloscPolozen: 1300, mag_iloscWozkow: 50, mag_iloscHal: 1, mag_iloscSkanerow: null  }
            ])
            .then( () => {
                return Magazyn.findAll();
            });
        } else {
            return magazyny;
        }
    })
    .then( magazyny => {
        wszystkieMagazyny = magazyny;
        return Firma.findAll();
    })
    .then( firmy => {       
        if( !firmy || firmy.length == 0){
            return Firma.bulkCreate([
                {   frm_nazwa: 'RUCH S.A.', frm_adres: 'ul.Annopol 17a', frm_kodP: '03-236', frm_miasto: 'Warszawa', frm_krajPrefix: 'PL', frm_prezes: 'Łukasz Porażyński'},
                {   frm_nazwa: 'Arteria Logistics', frm_adres: 'ul.Stawki 2A', frm_kodP: '00-193', frm_miasto: 'Warszawa', frm_krajPrefix: 'PL', frm_prezes: 'Piotr Wojtowski'},
                {   frm_nazwa: 'Panattoni Europe', frm_adres: 'plac Europejski 1', frm_kodP: '00-844', frm_miasto: 'Warszawa', frm_krajPrefix: 'PL', frm_prezes: null}
            ])
            .then( () => { 
                return Firma.findAll();
            });
        } else {            
            return firmy;
        }
    })
    .then( firmy => {
        wszystkieFirmy = firmy;
        return Pracownik.findAll();
    })
    .then( pracownicy => {        
        if( !pracownicy || pracownicy.length == 0 ) {
            return Pracownik.bulkCreate([                                
                { frm_id: wszystkieFirmy[0].frm_id, mag_id: wszystkieMagazyny[0].mag_id, prc_imie: 'Krzysztof', prc_nazwisko: 'Jurkowski', prc_dataUrodzenia: '1997-03-03', prc_stanowisko: 'wózkowy', prc_stanCywilny: null},
                { frm_id: wszystkieFirmy[0].frm_id, mag_id: wszystkieMagazyny[1].mag_id, prc_imie: 'Tomasz', prc_nazwisko: 'Krasieńko', prc_dataUrodzenia: '1998-01-28', prc_stanowisko: 'Mid Programista ERP', prc_stanCywilny: 'Żonaty'},
                { frm_id: wszystkieFirmy[0].frm_id, mag_id: wszystkieMagazyny[2].mag_id, prc_imie: 'Jakub', prc_nazwisko: 'Michalak', prc_dataUrodzenia: '1997-05-01', prc_stanowisko: 'Senior Programista ERP', prc_stanCywilny: 'Żonaty'}
            ]);
            
        } else {                    
            return pracownicy;
        }
    });
};