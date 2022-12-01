require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(
  `mongodb+srv://${process.env.MONGOOSE_USR}:${process.env.MONGOOSE_PWD}@cluster0.osrylpd.mongodb.net/ballcardDB`
);

app.use("/", require("./routes/cardRoute"));

function createCard(newCard) {
  const card = new Card({
    company: newCard.company,
    number: newCard.number,
    player: newCard.player,
    team: newCard.team,
    position: newCard.position,
  });

  card.save();
  return card;
}

function updateCard(cardId) {
  Card.updateOne({ cardId }, { name: "" }, function (err) {
    if (err) {
      console.log(err);
    } else {
      console.log("Card updated.");
    }
  });
}

app.post("/addCard", (req, res) => {
  const newCard = {
    company: req.body.company,
    number: req.body.number,
    player: req.body.player,
    team: req.body.team,
    position: req.body.position,
  };
  createCard(newCard);
});

app.get("/displayCards", (req, res) => {
  Card.find({}, function (err, cards) {
    res.send(cards);
  });
});

app.get("/", (req, res) => {
  res.send("This is a test.");
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
