const express = require('express');

//Logger middleware

const logger = (req, res, next) => {
     req.hello = "Hello World";
    // console.log(req.method) // get method, post method, put method, delete method 
    // console.log(req.protocol) // http or https
    // console.log(req.get('host')) // localhost:6000
    // console.log(req.originalUrl) // /api/v1/bootcamp
    console.log(`Url: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next()
  }
  // logger npm package
  
  
  // get https://localhost:6000/api/v1/bootcamp

  module.exports = logger;