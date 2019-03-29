var mongoose = require('mongoose');

module.exports = new mongoose.Schema({
    code: {
        type:String,
        required: true
    },
    price:{
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    minimun:{
        type: Number,
        required: true
    }
});