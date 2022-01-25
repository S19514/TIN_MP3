var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const sequelizeInit = require('./config/sequelize/init');
sequelizeInit()
  .catch(err => { 
    console.log(err);
  })

var indexRouter = require('./routes/index');
var employeeRouter = require('./routes/employeeRoute');
var warehouseRouter = require('./routes/warehouseRoute');
var companyController = require('./routes/companyRoute');
var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

const session = require('express-session');
app.use(session({
  secret: 'my_secret_password',
  resave: false,
  saveUninitialized: true // in case of problems delete it. Its not included in tutorial
}));

app.use((req, res, next) => {
  const loggedUser = req.session.loggedUser;
  res.locals.loggedUser = loggedUser;
  if(!res.locals.loginError) {
    res.locals.loginError = undefined;
  }
  next();
});

const authUtils = require('../TIN_MP3/util/authUtils.js');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
const i18n = require('i18n');
i18n.configure({
   locales: ['pl', 'en'], // języki dostępne w aplikacji. Dla każdego z nich należy utworzyć osobny słownik 
   directory: path.join(__dirname, 'locales'), // ścieżka do katalogu, w którym znajdują się słowniki
   objectNotation: true, // umożliwia korzstanie z zagnieżdżonych kluczy w notacji obiektowej
   cookie: 'acme-hr-lang', //nazwa cookies, które nasza aplikacja będzie wykorzystywać do przechowania informacji o języku aktualnie wybranym przez użytkownika
});

app.use((req, res, next) => {
  if(!res.locals.lang) {
      const currentLang = req.cookies['acme-hr-lang'];
      res.locals.lang = currentLang;
  }
  next();
});

app.use(i18n.init);
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/employees',authUtils.permitAuthenticatedUser, employeeRouter);
app.use('/warehouses',authUtils.permitAuthenticatedUser,warehouseRouter);
app.use('/companies',authUtils.permitAuthenticatedUser,companyController);

const magApiRouter = require('./routes/api/MagazynApiRoute');
const frmApiRouter = require('./routes/api/FirmaApiRoute');
const prcApiRouter = require('./routes/api/PracownikApiRoute');
const { ne } = require('sequelize/dist/lib/operators');

app.use('/api/warehouses', magApiRouter);
app.use('/api/companies',frmApiRouter);
app.use('/api/employees',prcApiRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
