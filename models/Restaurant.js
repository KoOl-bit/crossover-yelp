const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RestaurantSchema = new Schema({
  name: {
    type: String,
    required: [true, "Please add a name"],
    maxlength: [50, "Only max 50 chars are allowed for the name"],
  },
  city_id: {
    type: Number,
    required: [true, "Please add a city id"],
  },
});

module.exports = mongoose.model("Restaurant", RestaurantSchema);
