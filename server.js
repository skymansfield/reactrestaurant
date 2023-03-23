const mongoose = require('mongoose')
const express = require("express");
const cors = require("cors")
require('dotenv').config();
const passport = require('passport')
const cookieParser = require('cookie-parser')
const bcrypt = require('bcryptjs')
const session = require('express-session')
const bodyParser = require('body-parser')
const app = express();
const helmet = require('helmet')
const LocalStrategy = require('passport-local')
const UserModel = require('./backend/models/UserModel')
const UserRoutes = require('./backend/routes/UserRoutes');
const AdminModel = require('./backend/models/AdminModel')
const AdminRoutes = require('./backend/routes/AdminRoutes')
const { ObjectID } = require("mongodb");

app.use(cors({
  origin: "http://localhost:3000", optionsSuccessStatus: 200 ,
  credentials: true
}));
app.use('/public', express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(cookieParser('proccess.env.SESSION_SECRET'));
app.use(passport.initialize());
app.use(passport.session());
app.use(helmet.hidePoweredBy({ setTo: 'PHP 4.2.0' }));
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

mongoose.connect(process.env.MONGOURI, { useNewUrlParser: true, useUnifiedTopology: true }, (err, data) => {
  if (err) {
    console.log('Database error: ' + err);
  } else {
    console.log('Successful database connection');
    passport.serializeUser((user, done) => {
      done(null, user._id)
    });
    passport.deserializeUser((id, done) => {
      AdminModel.findOne({ _id: new ObjectID(id) },
        (err, doc) => {
          done(null, doc)
        }
      )
    });
    passport.use(new LocalStrategy(
      function (username, password, done) {
        AdminModel.findOne({ username: username }, function (err, user) {
          console.log('User ' + username + ' attempted to log in.');
          if (err) throw err;
          if (!user) { return done(null, false) }
    
          bcrypt.compare(password, user.password, (err, result) => {
            if (err) throw err;
            if (result == true) {
              return done(null, user)
            } else {
              return done(null, false)
            }
          })
        });
      }
    ));
    
    app.use('/', AdminRoutes)
    app.use('/', UserRoutes)
    
    const PORT = process.env.PORT || 8080;
    
    app.listen(PORT, function() {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  }
});
