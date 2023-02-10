const express = require('express');

// @desc    Create new bootcamp
// @route   POST /api/v1/bootcamp
// @access  Private
export const createBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Create a new bootcamp'});
}

// @desc    Get all bootcamps
// @route   GET /api/v1/bootcamp
// @access  Public
export const getBootcamps = (req, res, next) => {
    res.status(200).json({success: true, msg: 'Get all bootcamps'});
}

// @desc    Get single bootcamp
// @route   GET /api/v1/bootcamp/:id
// @access  Public
export const getBootcampSingle = (req, res, next) => {
    res.status(200).json({success: true, msg: `Get bootcamp ${req.params.id}`});
}

// @desc    Update bootcamp
// @route   PUT /api/v1/bootcamp/:id
// @access  Private
export const updateBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Update bootcamp ${req.params.id}`});
}

// @desc    Delete bootcamp
// @route   DELETE /api/v1/bootcamp/:id
// @access  Private
export const deleteBootcamp = (req, res, next) => {
    res.status(200).json({success: true, msg: `Delete bootcamp ${req.params.id}`});
}


