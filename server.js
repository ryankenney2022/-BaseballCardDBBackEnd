require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const port = 5000;

app.use(cors());
app.use(express.json());
app.use("/", require("./routes/cardRoute"));

mongoose.connect(
  `mongodb+srv://${process.env.MONGOOSE_USR}:${process.env.MONGOOSE_PWD}@cluster0.osrylpd.mongodb.net/ballcardDB`
);

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
