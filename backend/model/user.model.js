const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        required: true
    },
    description: {
        type: String,
        maxlength: 255
    },
    year: String,
    tutor: {
        type: Boolean,
        moduleTeached: [String],
        subjectTeached: [String],
        
    },
    photo: String,
    module: [String],
    subject: [String]

});



module.exports = mongoose.model('Todo', User);