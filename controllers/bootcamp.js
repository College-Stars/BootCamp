const express = require('express');

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamp
// @access  Private
const createBootcamp = (req, res, next) => {  //middleware
    res.status(200).json({success: true, msg: 'Create a new bootcamp'});
    next()
}

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamp
// @access  Public
const getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Get all bootcamps'});
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamp/:id
// @access  Public
const getBootcampSingle = (req, res, next) => {
    res.status(200).json({success: true, msg: `Get bootcamp ${req.params.id}`});
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamp/:id
// @access  Private
const updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`});
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamp/:id
// @access  Private
const deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`});
}

module.exports = {createBootcamp, getBootcamps, getBootcampSingle, updateBootcamp, deleteBootcamp}

