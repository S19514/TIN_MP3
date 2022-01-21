const PracownikRepository = require('../repository/sequelize/PracownikRepository');
const authUtil = require('../util/authUtils.JS');

exports.login = (req, res, next) => {
    const imie = req.body.imie;
    const nazwisko = req.body.nazwisko;
    const password = req.body.password;
    PracownikRepository.findByCredentials(imie,nazwisko)
        .then(prc => {
            if(!prc) {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowe dane logowania"
                })
            } else if(authUtil.comparePasswords(password,prc.password) === true) {
                req.session.loggedUser = prc;
                res.redirect('/');
            } else {
                res.render('index', {
                    navLocation: '',
                    loginError: "Nieprawidłowe dane logowania"
                })
            }
        })
        .catch(err => {
            console.log(err);
        });
}

exports.logout = (req, res, next) => {
    req.session.loggedUser = undefined;
    res.redirect('/');
}