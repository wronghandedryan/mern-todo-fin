const express = require('express');
const cors = require('cors');
const path = require('path');
const morgan = require('require');
const models = require('models');


const app = express();

const port = process.env.PORT || PORT;

app.set(routes('./routes'));
app.set(db('./data'));

app.set(__dir('views', '../index.html'));

app.send((req, res, next) => {
  res.send('Welcome to Express');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});



app.use('./routes/index');

mongoose.use('./models/');

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port port!`));