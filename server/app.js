const express = require("express")
const app = express()
const authRoutes = require("./routes/auth")
const knex = require("./dbConnect")
const jwtMiddleware = require("express-jwt")
const jwtToken = require("jsonwebtoken")
require("dotenv").config()
// ignore this for now
// const todoRoutes = require("./routes/todos");
// const userRoutes = require("./routes/users");
// app.use("/api", todoRoutes);
// app.use("/api", userRoutes);

const userDashboard = require("./routes/dashboard")
const userLogin = require("./routes/login")

function attachUser(req, res, next) {
  const authorizationHeader = req.headers.authorization
  if (authorizationHeader) {
    const token = authorizationHeader.split(" ")[1]
    const decoded = jwtToken.decode(token)
    req.user = { id: decoded.id, username: decoded.username }
    console.log(req.user)
  }
  next()
}

app.use(attachUser)
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use("/api", authRoutes)

app.get("/api/test", (req, res) => {
  res.json(req.user)
})

// app.get("/", async (req, res) => {
//   res.json({ message: "hi" });
// });

// GET requests for projects
app.get("/api/projects", async (req, res) => {
  // LEFT JOIN before CARDS and columns
  const displayProjects = `
  SELECT * FROM projects
    WHERE id=1;`

  const jelloApp = await knex.raw(displayProjects)
  res.json(jelloApp.rows)
})

// GET request for  columns
app.get("/api/columns", async (req, res) => {
  const displayColumns = `select * from columns
    where project_id=1;`
  const jelloApp = await knex.raw(displayColumns)
  res.json(jelloApp.rows)
})

// POST request for columns
app.post("/api/columns", (req, res) => {
  console.log(req.body)
  const { title } = req.body
  knex
    .raw(`INSERT INTO columns (title, project_id) VALUES (?, ?)`, [title, 1])
    .then((result) => {
      res.json(result.rows)
    })
})

//GET request for cards
app.get("/api/cards", async (req, res) => {
  const displayCards = `select * from cards
    where column_id=1;`
  const jelloApp = await knex.raw(displayCards)
  res.json(jelloApp.rows)
})

// POST request for cards
app.post("/api/columns", (req, res) => {
  const { description, column_id } = req.body
  knex
    .raw(
      `INSERT INTO cards (description, column_id) VALUES (${description})?, ?)`,
      [title, 1]
    )
    .then((result) => {
      res.json(result.rows)
    })
})

// POST requests
app.post("/api/jello_app", async (req, res) => {
  res.json()
})

// PATCH requests
app.patch("/api/jello_app", (req, res) => {
  res.json()
})

// DELETE requests
app.delete("/api/jello_app", (req, res) => {
  res.json()
})

app.listen(3002, () => {
  console.log("running on port 3002")
})
