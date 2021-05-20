const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CitySchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [50, "Only max 50 chars are allowed for the name"],
  },
});

module.exports = mongoose.model("City", CitySchema);
