const express = require("express");
const router = express.Router();
const knex = require("../dbConnect.js");

// GET request for  columns
router.get("/columns", async (req, res) => {
  const displayColumns = `select * from columns
      where project_id=1;`;
  const columns = await knex.raw(displayColumns);
  res.json(columns.rows);
});

// POST request for columns
router.post("/columns", async (req, res) => {
  console.log(req.body);
  const { title } = req.body;
  knex
    .raw(`INSERT INTO columns (title, project_id) VALUES (?, ?)`, [title, 1])
    .then((result) => {
      res.json(result.rows);
    });
});

// PATCH request for columns
router.patch("/columns/:id", (req, res) => {
  const { id } = req.params;
  const { title } = req.body;
  knex
    .raw(`UPDATE columns  SET title = ? WHERE id = ?`, [title, id])
    .then((result) => {
      res.json(result.rows);
    });
});
// DELETE request for columns
router.delete("/columns/:id", async (req, res) => {
  const { id } = req.params;
  await knex.raw(`DELETE FROM columns WHERE id =?`, [id]);
  res.json();
});

module.exports = router;
