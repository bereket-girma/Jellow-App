const knex = require("knex")({
  client: "pg",
  version: "7.2",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "",
    database: "jello_app",
  },
});
module.exports = knex;
