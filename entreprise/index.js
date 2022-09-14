const express = require('express');
const app = express()
require('dotenv').config()
const port = process.env.PORT || 8080;
const cors = require("cors");
const Entreprise = require("./src/models/Entreprise");

const corsOptions = {
    origin: `http://localhost:${port}`
};
app.use(cors(corsOptions));
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}));
// Routes
require("./src/routes/entreprise.route")(app);
// simple route
console.log(port)
app.listen(port, async () => {
    await Entreprise.sync({force: true})
    console.log(`http://localhost:${port}/`);
});