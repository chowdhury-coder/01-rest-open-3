const express = require('express');
const app = express();
const { Dog } = require('./db');
const { sequelize } = require('./db/db');
const { Op } = require('sequelize');


app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get('', async (req, res, next) => {
  try {
    res.send('GET REQUEST HERE');
  } catch (error) {
    next(error)
  }
});

app.post('', async (req, res, next) => {
  try {
   res.send('POST REQUEST HERE')
  } catch (error) {
    next(error);
  }
});

app.delete('', async (req, res, next) => {
  try {
    res.send('DELETE REQUEST HERE')
  } catch (error) {
    next(error);
  }
});

const { PORT = 4000 } = process.env;

app.listen(PORT, () => {
  sequelize.sync({ force: false });
  console.log(`Dogs are ready at http://localhost:${PORT}`);
});
