const mongoose = require("mongoose");

const HeaderSchema = new mongoose.Schema({
  image: { type: String, require: true },
});

module.exports = mongoose.model("Header", HeaderSchema);
