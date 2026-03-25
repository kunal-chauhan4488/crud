// const express = require("express")
// const Router = require("./routes/Router")
// const hbs = require("hbs")
// const path = require("path")
// const app = express()
// require("./db-connect")
// app.set("view engine", "hbs")
// hbs.registerPartials(path.join(__dirname + "/views/partials"))
// app.use("/", Router)
// app.listen(8000, () => console.log(`Server is Running at http://localhost:8000`))

const express = require("express");
const Router = require("./routes/Router");
require("dotenv").config();
const hbs = require("hbs");
const path = require("path");

const app = express();

require("./db-connect");

app.set("view engine", "hbs");
hbs.registerPartials(path.join(__dirname + "/views/partials"));

app.use("/", Router);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
    console.log(`Server is Running on port ${PORT}`);
});