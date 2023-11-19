// server.js

const express = require('express');
const {connectDB} = require('../api/models/model');
const router = require('../api/routes/router');
const cors = require('cors');
const bodyParser = require("body-parser");

const app = express();


app.use(cors());

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
const PORT = process.env.PORT || 3000;

connectDB(); // Connect to MongoDB
app.use(bodyParser.json());
// app.use(express.json()); // Parse JSON requests
app.use('/', router); // Use the router for /api endpoint
// app.use('/', require('./routes/index'));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
