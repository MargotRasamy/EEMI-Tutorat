const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Course = new Schema({
    nameCourse: { 
        type: String,
        required: true
    },
    module: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    creator: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    participants: [
        {   
            type : Schema.Types.ObjectId, 
            ref: 'User' 
        }
    ],
    maxParticipants : Number,
    duration: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('Course', Course);