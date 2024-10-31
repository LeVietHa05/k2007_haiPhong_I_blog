var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var menuRouter = require('./routes/menu');
var activitesRouter = require('./routes/activites');
var infoRouter = require('./routes/info');
var recipesRouter = require('./routes/recipes');
var faqRouter = require('./routes/faq');
var reservationRouter = require('./routes/reservation');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/menu', menuRouter);
app.use('/activites', activitesRouter);
app.use('/info', infoRouter);
app.use('/recipes', recipesRouter);
app.use('/faq', faqRouter);
app.use('/reservation', reservationRouter);

module.exports = app;
