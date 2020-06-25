const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserModel = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    firstname: {
        type: String,
        //required: true
    },
    lastname: {
        type: String,
        //required: true
    },
    tutorStatus: {
        type: Boolean,
        //required: true,
    },
    classYear: {
        type: [String],
        //required: true
    },
    modules: {
        type: [String],
        required: false
    },
    subjects: {
        type: [String],
        required: false
    },
    modulesTeached: {
        type: [String],
        required: false
    },
    subjectsTeached: {
        type: [String],
        required: false
    },
    photo: {
        type: String,
        required: false
    },
    description: {
        type: String,
        require: false,
        maxlength: 255
    }
});



module.exports = mongoose.model('User', UserModel);