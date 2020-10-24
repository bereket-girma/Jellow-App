const express = require("express");
const router = express.Router();
const knex = require("../dbConnect.js");

//GET request for cards
router.get("/cards", async (req, res) => {
  const displayCards = `select * from cards
      where column_id=1;`;
  const cards = await knex.raw(displayCards);
  res.json(cards.rows);
});

// POST request for cards
router.post("/cards", async (req, res) => {
  const { description, column_id } = req.body;
  knex
    .raw(`INSERT INTO cards (description, column_id) VALUES(?, ?)`, [
      description,
      column_id,
    ])
    .then((result) => {
      res.json(result.rows);
    });
});

// PATCH request for cards
router.patch("/cards/:id", (req, res) => {
  const { id } = req.params;
  const { description, title } = req.body;
  knex
    .raw(`UPDATE cards SET description=?, title=? WHERE id =?`, [description, title, id])
    .then((result) => {
      res.json(result.rows);
    });
});

// DELETE request for cards
router.delete("/cards/:id", (req, res) => {
  const { id } = req.params;
  knex.raw(`DELETE FROM cards WHERE id = ?`, [id]).then((result) => {
    res.json(result.rows);
  });
});

module.exports = router;
