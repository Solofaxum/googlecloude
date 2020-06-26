const express = require('express');
const mongoose = require ('mongoose');
const bodyParser=require ('body-parser');

// const userCarRoute = require("./route/userCar");
const app = express()
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Solomon says This is my express backend!'));
app.get('/users', (req, res) => res.send('Solomons user page looks amaizing!'));
app.get('/destaye', (req, res) => res.send('Solomons mother details!!'));

// app.use(userCarRoute);
mongoose.connect("mongodb://localhost:27017/courseapi",
{ useNewUrlParser: true, useUnifiedTopology: true })


app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))