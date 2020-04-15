const express = require('express');
const path =  require('path');
const engine = require('ejs-mate');
const methodOverride = require('method-override');
//const morgan = require('morgan');
const passport = require('passport');
const session = require('express-session');
const flash = require('connect-flash')


//initilizations
const app = express();
require('./database');

//settings
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('ejs',engine);
app.set('view engine', 'ejs');

//middleawares
app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'));
app.use(session({
  secret: 'myscretSession',
  resave: true,
  saveUninitialized: true
}));

//gloval variables
// app.use((req, res, next) => {
//   res.locals.success_msg = req.flash('success_msg');
//   res.locals.error_msg = req.flash('error_msg');
//   res.locals.error = req.flash('error');
//   res.locals.user = req.user || null;
//   next();
// });

//routes
app.use(require('./controllers/index'));
app.use(require('./controllers/users'));
app.use(require('./controllers/admin'));

//static Files
app.use(express.static(path.join(__dirname, 'public')));

//Server is Listenning
app.listen(app.get('port'), function (){
	console.log('Server on Port', app.get('port'));
});