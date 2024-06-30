const express = require("express");
const dotenv = require("dotenv");

const dbConnect = require("./config/dbConnect");
const authRouter = require("./routes/authRoute");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

dbConnect();

app.use(express.json());

app.use("/api/v1/user", authRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})