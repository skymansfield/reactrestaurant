const mongoose = require('mongoose')
const Schema = mongoose.Schema

const AdminSchema = new Schema({
  username: {
    type: String
  },
  password: {
    type: String    
  }
});
let AdminModel = mongoose.model("admin", AdminSchema);
module.exports = AdminModel;