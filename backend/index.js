const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");



app.use(cors({
    origin: ["http://localhost:3000"],
    methodes: ["GET","POST"],
    credentials: true,
  }));




// Import Routes
const MovieSearch = require("./routes/tmdb-routes");


dotenv.config();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.urlencoded({extended: true}));



// Route Middleware
app.use("/api/", MovieSearch);


app.listen( process.env.PORT || 3001, () => console.log("Server is Up and Running"));
