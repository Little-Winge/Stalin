const mongoose = require("mongoose");
const Schema = new mongoose.Schema({
  Guild: String,
  Tickets: Array,
});
module.exports = mongoose.model("Tickets", Schema);