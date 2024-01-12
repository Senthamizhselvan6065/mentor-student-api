const studentRouter = require('express').Router();
const expressAsyncHandler = require('express-async-handler');
const ErrorHandler = require('../middlewares/ErrorHandler');
const Student = require('../models/student.model');


/* get method */
/* get all students */
studentRouter.get('/students', expressAsyncHandler( async (req, res, next) => {
    const students = await Student.find();
    if(students) return res.status(200).json({
        success: true,
        message: 'get all students details...',
        count: students.length,
        students
    })
    else if(!students) return next (new ErrorHandler(400, 'cannot fetch students details...'));
}))

/* post method */
/* create a student */
studentRouter.post('/student', expressAsyncHandler( async (req, res, next) => {
    const {name, email} = req.body;
    if(!name) return next (new ErrorHandler(400, 'please enter student name...'));
    else if(!email) return next (new ErrorHandler(400, 'please enter student email address...'));
    const studentEmail = await Student.findOne({email})
    if(studentEmail) return next (new ErrorHandler(400, 'Already used this email address...'))
    const student = await Student({
        name,
        email
    });
    await student.save();
    if(student) return res.status(201).json({
        success: true,
        message: 'student details created...',
        student
    })
    else if(!student) return next (new ErrorHandler(400, 'cannot created student details...'));
}));

/*  List of students with no mentors */
studentRouter.get('/no-mentors', expressAsyncHandler( async(req, res, next) => {
    const students = await Student.find({mentor:undefined});
    if(students) return res.status(200).send(students);
    else if(!students) return next (new ErrorHandler(400, 'students not found...'));
}))


/* Assign or change Mentor for Student -- select one student and assign one mentor */
studentRouter.patch('/assign-mentor/:studentId', expressAsyncHandler( async(req, res, next) => {
    const {studentId} = req.params;
    const {mentorId} = req.body;
    if(!studentId) return next (new ErrorHandler(400, 'provide student id...'));
    else if(!mentorId) return next (new ErrorHandler(400, 'provide mentor...'));
    const student = await Student.findById(studentId);
    student.mentor = mentorId;
    await student.save();    
    if(student) return res.status(200).send(student);
    else if(!student) return next (new ErrorHandler(400, 'student not found...'));
}))

/* select one mentor and add to multiple students */
studentRouter.patch('/assign-mentor-students', expressAsyncHandler( async (req, res, next) => {
    const {mentorId,studentIdList} = req.body;
    if(!studentIdList) return next (new ErrorHandler(400, 'provide student id...'));
    else if(!mentorId) return next (new ErrorHandler(400, 'provide mentor id...'));
        const student = await Student.findById(studentIdList)
        student.mentor = mentorId;
        await student.save();
        res.status(200).send('Updated success...')
}))

/* show all students for a particular mentor */
studentRouter.get('/mentor-students/:mentorId', expressAsyncHandler( async (req, res, next) => {
    const {mentorId} = req.params;
    if(!mentorId) return next (new ErrorHandler(400, 'provide mentor id...'));
    const students = await Student.find({mentor : mentorId});
    if(students) return res.status(200).send(students);
    else if(!students) return next (new ErrorHandler(400, 'student not found...'))
}))

module.exports = studentRouter;