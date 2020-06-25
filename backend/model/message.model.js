const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Message = new Schema({
    message: { 
        type: String
    },
    date: {
        type: Date,
    },
    author: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    receiver:{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
});



module.exports = mongoose.model('Message', Message);