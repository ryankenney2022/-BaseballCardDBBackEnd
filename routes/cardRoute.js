const express = require("express");
const router = express.Router();
const Card = require("../models/cardModel");

router.route("/addCard").post((req, res) => {
  const company = req.body.company;
  const year = req.body.year;
  const number = req.body.number;
  const player = req.body.player;
  const team = req.body.team;
  const position = req.body.position;
  const frontImgSrc = req.body.frontImgSrc;

  const newCard = new Card({
    company,
    year,
    number,
    player,
    team,
    position,
    frontImgSrc,
  });

  newCard.save();
});

router.route("/cards").get((req, res) => {
  Card.find().then((foundCards) => res.json(foundCards));
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
