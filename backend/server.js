const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv').config();

const app = express();

// middleware
app.use(express.json());
app.use(cors({
    origin: process.env.FRONTEND_URL
}));

// connect to mongodb
mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT;
    app.listen(PORT , () => {
        console.log(`Server started on port ${PORT}`);
    })
}).catch(err => console.log(err));

// route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend"})
})