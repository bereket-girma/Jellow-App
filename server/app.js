const express = require('express')
const app = express()
const knex = require('knex')({
  client: 'pg',
  version: '7.2',
  connection: {
    host: '127.0.0.1',
    user: 'postgres',
    password: '',
    database: 'jello_app',
  },
});

app.use(express.urlencoded({extended: false}))
app.use(express.json());


app.get('/', async (req, res) => {
  res.json({message: 'hi'})
})
app.listen(3002, () => {
  console.log('running on port 3002')
})

