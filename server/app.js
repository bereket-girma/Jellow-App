const express = require("express");
const app = express();
const authRoutes = require("./routes/auth");
const knex = require("./dbConnect");
const jwtMiddleware = require("express-jwt");
const jwtToken = require("jsonwebtoken");
require("dotenv").config();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const boardsRoutes = require("./routes/boards");
const columnsRoutes = require("./routes/columns");
const cardsRoutes = require("./routes/cards");

app.use("/api", boardsRoutes);
app.use("/api", columnsRoutes);
app.use("/api", cardsRoutes);

function attachUser(req, res, next) {
  const authorizationHeader = req.headers.authorization;
  if (authorizationHeader) {
    const token = authorizationHeader.split(" ")[1];
    const decoded = jwtToken.decode(token);
    req.user = { id: decoded.id, username: decoded.username };
    console.log(req.user);
  }
  next();
}

app.use(attachUser);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api", authRoutes);

app.listen(3002, () => {
  console.log("running on port 3002");
});
