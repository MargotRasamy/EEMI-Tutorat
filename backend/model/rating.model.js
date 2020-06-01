const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Rating = new Schema({
    rating: { 
        type: Number,
        required: true
    },
    rater: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    rated:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
});



module.exports = mongoose.model('Rating', Rating);