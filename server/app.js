const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const boardsRoutes = require("./routes/boards");
const columnsRoutes = require("./routes/columns");
const cardsRoutes = require("./routes/cards");

app.use("/api", boardsRoutes);
app.use("/api", columnsRoutes);
app.use("/api", cardsRoutes);

app.listen(3002, () => {
  console.log("running on port 3002");
});
