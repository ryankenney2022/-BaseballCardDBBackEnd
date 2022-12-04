const express = require("express");
const { ConnectionClosedEvent } = require("mongodb");
const router = express.Router();
const Card = require("../models/cardModel");

router.route("/cards").get((req, res) => {
  Card.find()
    .sort({ number: 1 })
    .then((foundCards) => res.json(foundCards));
});

router.route("/addCard").post((req, res) => {
  const company = req.body.company;
  const year = req.body.year;
  const number = req.body.number;
  const player = req.body.player;
  const team = req.body.team;
  const position = req.body.position;
  const frontImgSrc = req.body.frontImgSrc;
  const quantity = req.body.quantity;

  const newCard = new Card({
    company,
    year,
    number,
    player,
    team,
    position,
    frontImgSrc,
    quantity,
  });

  newCard.save();
});

router.route("/updateCard/:id").patch(async (req, res) => {
  const id = req.params.id;
  console.log(id);

  Card.findByIdAndUpdate(id, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Updated: ", docs);
    }
  });
});

router.route("/deleteCard/:id").delete(async (req, res) => {
  const id = req.params.id;
  console.log(id);

  Card.findByIdAndDelete(id, (err, docs) => {
    if (err) {
      console.log(err);
    } else {
      console.log("Deleted: ", docs);
    }
  });
});

module.exports = router;
