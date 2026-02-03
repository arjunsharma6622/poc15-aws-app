const express = require("express");
const app = express();

const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
    res.send("Hello from POC15 Server, using rehost strategy x, added line after doing replatforming");
})

const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
    console.log(`POC15 Server Running on PORT ${PORT}`);
})