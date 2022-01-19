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

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/employees', employeeRouter);
app.use('/warehouses',warehouseRouter);
app.use('/companies',companyController);

const magApiRouter = require('./routes/api/MagazynApiRoute');
const frmApiRouter = require('./routes/api/FirmaApiRoute');
const prcApiRouter = require('./routes/api/PracownikApiRoute');

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
