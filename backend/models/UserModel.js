const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
  name: {
    type: String
  },
  guests:{
    type: Number
  },
  date: {
    type: Date
  },
  time:{
    type: String
  },
  message: {
    type: String
  }
});
let UserModel = mongoose.model("reservation", UserSchema);
module.exports = UserModel;