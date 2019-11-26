var createError = require('http-errors');
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mean-angular6')
  .then(() =>  console.log('connection succesful'))
  .catch((err) => console.error(err));

var apiRouter = require('./routes/book');
var enderecoRouter = require('./routes/endereco');
var casaRouter = require('./routes/casa');
var apartamentoRouter = require('./routes/apartamento');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/books', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/book-details/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/book-create', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/book-edit/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/api', apiRouter);

app.use('/enderecos', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/endereco-details/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/endereco-create', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/endereco-edit/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/apiendereco', enderecoRouter);

app.use('/casas', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/casa-details/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/casa-create', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/casa-edit/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/apicasa', casaRouter);

app.use('/apartamentos', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/apartamento-details/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/apartamento-create', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/apartamento-edit/:id', express.static(path.join(__dirname, 'dist/mean-angular6')));
app.use('/apiapartamento', apartamentoRouter);

app.use('/inicio', express.static(path.join(__dirname, 'dist/mean-angular6')));

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
  res.send(err.status);
});

module.exports = app;
