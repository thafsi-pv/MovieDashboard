const express = require("express");
const genreModel = require("../Models/genreModel");

const genreRouter = express.Router();

genreRouter.get("/", async (req, res) => {
  try {
    const genre = await genreModel.find({});
    res.json(genre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

genreRouter.post("/", async (req, res) => {
  console.log("🚀 ~ file: Genre.js:16 ~ genreRouter.post ~ req:", req.body);
  try {
    let newGenre = "";
    if (req.body.id != 0) {
      newGenre = await genreModel.findByIdAndUpdate(
        req.body.id,
        {
          genre: req.body.genre,
        },
        { new: true }
      );
    } else {
      newGenre = await genreModel.create(req.body);
    }
    res.json(newGenre);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

genreRouter.delete("/", async (req, res) => {
  const { id } = req.body;
  const data = await genreModel.findByIdAndDelete(id);
  res.json(data);
});

module.exports = genreRouter;
