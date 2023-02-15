const express = require('express');
const app = express();
const mongoose = require('mongoose');

// all models 
  require('./models/Bootcamp');


// all routes
const bootcampRouter = require('./routes/bootcamp');



const dotenv = require('dotenv');
// const logger = require('./middlewears/logger');
const colors = require('colors');
const morgan = require('morgan');
dotenv.config({path: "./config/.env"}); // Load .env file => you can access anything from .env file using process.env
let port = process.env.PORT1 || 6000;

let mongourl = process.env.MONGO_URL || "mongodb://localhost:27017/practicum";

// connect mongodb:
mongoose.connect(mongourl, {useNewUrlParser: true, useUnifiedTopology: true}) 

// true case - established
mongoose.connection.on("connected" , ()=>{console.log("connected to mongo".bgMagenta)})


// false case - not established
mongoose.connection.on("error" , (err)=>{console.log("error connecting to mongo", err)})






app.use(express.json()); // to parse json data
if( process.env.NODE_ENV == 'development') {
  app.use(morgan("dev")); // to use logger middleware
}
else if( process.env.NODE_ENV == 'production') {
  app.use(morgan("combined")); // to use logger middleware
}

app.use('/api/v1/bootcamp/', bootcampRouter)







app.listen(port, () => {
  console.log(`Bootcamp app listening at http://localhost:${port} in ${process.env.NODE_ENV} mode`.blue.bold)
})


