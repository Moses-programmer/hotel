const Hotel = require("../models/hotelModel");

// Create hotel
const createHotel = async (req, res) => {
  try {
    const { name, location, pricePerNight, availableRooms } = req.body;
    const hotel = await Hotel.create({ name, location, pricePerNight, availableRooms });
    res.status(201).json(hotel);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all hotels
const getHotels = async (req, res) => {
  try {
    const hotels = await Hotel.find();
    res.json(hotels);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createHotel, getHotels };
