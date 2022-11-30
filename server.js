const express = require("express");
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/ballcardDB");
const cardSchema = new mongoose.Schema({
  brand: String,
  number: Number,
  name: String,
  team: String,
  position: String,
});

const Card = mongoose.model("Card", cardSchema);

function addCard() {
  const card = new Card({
    brand: "TestBrand",
    number: 0,
    name: "TestPlayer",
    team: "TestTeam",
    position: "TestPosition",
  });

  card.save();
  return card;
}

function getCards() {
  Card.find(function (err, cards) {
    if (err) {
      console.log(err);
    } else {
      mongoose.connection.close();
      return console.log(cards);
    }
  });
}

const app = express();
const port = 5000;

app.get("/addCard", (req, res) => {
  const newCard = addCard();
  res.send(newCard);
});

app.post("/displayCards", (req, res) => {});

app.get("/", (req, res) => {
  res.send("This is a test.");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
