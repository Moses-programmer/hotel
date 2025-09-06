const mongoose = require("mongoose");

const hotelSchema = new mongoose.Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
  availableRooms: { type: Number, required: true, default: 0 }
}, { timestamps: true });

const Hotel = mongoose.model("Hotel", hotelSchema);
module.exports = Hotel;
