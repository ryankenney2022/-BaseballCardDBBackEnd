const express = require("express");
const router = express.Router();
const Card = require("../models/cardModel");

router.route("/addCard").post((req, res) => {
  const company = req.body.company;
  const number = req.body.number;
  const player = req.body.player;
  const team = req.body.team;
  const position = req.body.position;

  const newCard = new Card({
    company,
    number,
    player,
    team,
    position,
  });

  newCard.save();
});

router.route("/cards").get((req, res) => {
  Card.find().then((foundCards) => res.json(foundCards));
});
module.exports = router;
