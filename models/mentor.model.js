const mongoose = require('mongoose');
const validator = require('validator');

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: value => validator.isEmail(value),
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let Mentor = mongoose.model('mentors', mentorSchema);
module.exports = Mentor;