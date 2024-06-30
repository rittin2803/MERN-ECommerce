const express = require("express");
const dotenv = require("dotenv");

const dbConnect = require("./config/dbConnect");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

dbConnect();

app.use(express.json());

app.use("/", (req,res) => {
    res.send("Hello");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})