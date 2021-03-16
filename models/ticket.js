const mongoose = require("mongoose");
let Schema = new mongoose.Schema({
  Guild: String,
  Settings: {
    Role: String,
    Channel: String,
  },
});
module.exports = mongoose.model("Ticket", Schema);