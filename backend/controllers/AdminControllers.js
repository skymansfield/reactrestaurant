const AdminModel = require('../models/AdminModel')
const UserModel = require('../models/UserModel')
const bcrypt = require('bcryptjs')
const passport = require('passport');

const signUp = (req, res, next) => {
  AdminModel.findOne({ username: req.body.username }, (err, data) => {
    var hash = bcrypt.hashSync(req.body.password, 12)
    if (err) {
      console.log(err)
    } else if (data) {
      res.json({ message: "Username already exists" })
    } else {
      let person = new AdminModel({
        username: req.body.username,
        password: hash
      })
      person.save((err, data) => {
        if (err) {
          console.log(err);
        } else {
          passport.authenticate('local', (err, user, info) => {
            if (err) throw err;
            if (!user) res.send('No user exists!');
            else {
              req.logIn(user, (err) => {
                if (err) throw err;
                res.status(200).json({
                  success: true,
                  redirectUrl: '/main',
                  user: req.user
                });
              })
            }
          })(req, res, next)
        }
      })
    }
  })
};
const mainPage = (req, res) => {
  UserModel.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      console.log("data", data);
      res.status(200).json(data)
    }
  })
};
const login = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) throw err;
    if (!user) res.send('Please try again');
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        UserModel.find({}, (err, data) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).json({
              success: true,
              redirectUrl: '/main',
              user: req.user,
              reservations: data
            })
          }
        })
      })
    }
  })(req, res, next);
};
const deleteUser = (req, res) => {
  UserModel.findByIdAndRemove({ _id: req.body.resId },
    (err, data) => {
      if (err) {
        console.log(err);
      } else {
        res.status(200).json({
          success: true,
          redirectUrl: '/main',
        })
      }
    }
  )
};
module.exports = { signUp, mainPage, login, deleteUser }