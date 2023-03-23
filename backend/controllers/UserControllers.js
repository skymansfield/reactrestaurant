const UserModel = require('../../backend/models/UserModel')

const reservation = (req, res) => {
  let user = new UserModel({
    name: req.body.name,
    guests: req.body.guests,
    date: req.body.date,
    time: req.body.time,
    message: req.body.message
  })
  user.save((err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.status(200).json({
        success: true,
        redirectUrl: '/'
      })
    }
  })
};
const getReservation = (req, res) => {
  UserModel.find({}, (err, data) => {
    if (err) {
      console.log(err);
    } else {
      res.json(data)
    }
  })
};
module.exports = { reservation, getReservation }