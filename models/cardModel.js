const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
  company: { type: String, required: [true, "Card brand required."] },
  year: { type: String },
  number: { type: Number, required: [true, "Card number required."] },
  player: { type: String, required: [true, "Player name required."] },
  team: { type: String, required: [true, "Team name required."] },
  position: { type: String, required: [true, "Player position required."] },
  frontImgSrc: { type: String },
  quantity: { type: Number },
});

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
