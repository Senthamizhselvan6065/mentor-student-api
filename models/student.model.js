const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        validate: value => validator.isEmail(value),
        required: true
    },
    mentor : {
        type : mongoose.Schema.Types.ObjectId,
        default : undefined,
        ref : 'Mentor'
        
    },
    createdAt: {
        type: Date,
        default: Date.now()
    }
})

let Student = mongoose.model('students', studentSchema);
module.exports = Student;