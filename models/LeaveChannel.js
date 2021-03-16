const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  Channel: String,
  Guild: String,
  UserID: String,
});
module.exports = mongoose.model("leavechannel", Schema);