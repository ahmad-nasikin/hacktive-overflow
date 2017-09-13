var express = require('express');
var cors = require('cors')
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose')
mongoose.connect('mongodb://overflow:overflow@cluster0-shard-00-00-yjwrq.mongodb.net:27017,cluster0-shard-00-01-yjwrq.mongodb.net:27017,cluster0-shard-00-02-yjwrq.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin')

var index = require('./routes/index');
var users = require('./routes/users');
var questions = require('./routes/quetions')

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(cors())
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);
app.use('/question', questions)


module.exports = app;
