const express = require('express');
const app = express();
const dotenv = require('dotenv');
let port;

dotenv.config({path: "./config/.env"}); // Load .env file => you can access anything from .env file using process.env
// let t = process.env // object
if(process.env.NODE_ENV === "development") {
 port = process.env.PORT1 || 6000;
}
else {
 port = process.env.PORT2 || 7000;
}



app.listen(port, () => {
  console.log(`Bootcamp app listening at http://localhost:${port} in ${process.env.NODE_ENV} mode`)
})