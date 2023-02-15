const express = require('express');
const mongoose = require('mongoose');
const Bootcamp = mongoose.model('Bootcamp');
const colors = require('colors');

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamp
// @access  Private
const createBootcamp = (req, res, next) => {  //middleware
    // const {name, description, website, phone, email, address, location, careers} = req.body;
    const bootcamp = Bootcamp.create(req.body)
    .then(
        (bootcamp) => {
            res.status(200).json({success: true, msg: 'Create a new bootcamp', data: bootcamp});
        }
    )
    .catch(
        (err) => {
            console.log(`${err}`.red);
        }
    )

    
    
}

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamp
// @access  Public
const getBootcamps = (req, res, next) => {
    Bootcamp.find()
    .then((bootcamps)=>{
        res.status(200).json({success: true, msg: 'Get all bootcamps',
        count : bootcamps.length,
        data: bootcamps});
    }
    )
    .catch((err)=>{
        console.log(`${err}`.red);
    }
    )
   
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamp/:id
// @access  Public
const getBootcampSingle = (req, res, next) => {
    const bootcamp = Bootcamp.findById(req.params.id)
    .then((bootcamp)=>{
        if(!bootcamp){
            return res.status(400).json({success: false, msg: `Bootcamp not found with id ${req.params.id}`});
        }
      res.status(200).json({success: true,  data: bootcamp});
    })
    .catch((err)=>{
        console.log(`${err}`.red);
    })
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamp/:id
// @access  Private
const updateBootcamp = (req, res, next) => {
const bootcamp = Bootcamp.findByIdAndUpdate(req.params.id,  req.body ,{
    new: true,
    runValidators: true
})
// console.log(`${bootcamp}`.green);
.then((bootcamp)=>{
    console.log(`${bootcamp}`.green);
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`, data: bootcamp});
})
.catch((err)=>{
    console.log(`${err}`.red);
})
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamp/:id
// @access  Private
const deleteBootcamp = (req, res, next) => {
     Bootcamp.findByIdAndDelete(req.params.id)
    .then((bootcamp)=>{
        res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`, data: bootcamp} );
    })
    .catch((err)=>{
        console.log(`${err}`.red);
    })
    
}

module.exports = {createBootcamp, getBootcamps, getBootcampSingle, updateBootcamp, deleteBootcamp}

