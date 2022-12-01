const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  company: { type: String, required: [true, "Card brand required."] },
  number: { type: String, required: [true, "Card number required."] },
  player: { type: String, required: [true, "Player name required."] },
  team: { type: String, required: [true, "Team name required."] },
  position: { type: String, required: [true, "Player position required."] },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
