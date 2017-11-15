const mongoose = require("mongoose");

const celebritySchema = new Schema ({
  name: String,
  occupation: String,
  catchPhrase: String
});

const CelebrityModel = mongoose.model("Celibrities", celebritySchema);

module.exports = CelibrityModel;
