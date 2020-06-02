const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Progression = new Schema({
    progressionPoints: [{
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'Course'
    }],
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    }

});

module.exports = mongoose.model('Progression', Progression);