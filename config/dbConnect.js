const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const dbConnect = async () => {
    try {
        await mongoose.connect(process.env.DB_URI, {});
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = dbConnect;