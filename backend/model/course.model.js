const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Course = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    module: {
        type: String,
        required: true
    },
    nameCourse: { 
        type: String,
        required: true
    },
    description_course: String,
    date: {
        type: Date,
        required: true
    },
    participants: [
        {   
            type : Schema.Types.ObjectId, 
            ref: 'User' 
        }
    ],
    maxParticipants : Number,
    // duration: {
    //     type: Number,
    //     required: true
    // }
});

module.exports = mongoose.model('Course', Course);