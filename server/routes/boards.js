const express = require("express");
const router = express.Router();
const knex = require("../db.js");

// GET requests for projects
router.get("/projects", async (req, res) => {
  // LEFT JOIN before CARDS and columns
  const displayProjects = `
SELECT * FROM projects
    WHERE id=1;`;

  const jelloApp = await knex.raw(displayProjects);
  res.json(jelloApp.rows);
});

module.exports = router;
