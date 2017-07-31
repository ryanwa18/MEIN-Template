'use strict';

/**
* Module dependencies
*/
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

/**
* List Item Schema
*/
var ItemSchema = new Schema({
    content: {
        type: String,
        default: '',
        trim: true
    }
})

mongoose.model('Item', ItemSchema);