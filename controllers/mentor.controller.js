const mentorRouter = require('express').Router();
const expressAsyncHandler = require('express-async-handler');
const ErrorHandler = require('../middlewares/ErrorHandler');
const Mentor = require('../models/mentor.model');
const Student = require('../models/student.model');


/* get method */
/* get all mentors */
mentorRouter.get('/mentors', expressAsyncHandler( async (req, res, next) => {
    const mentors = await Mentor.find();
    if(mentors) return res.status(200).json({
        success: true,
        message: 'get all mentor details...',
        count: mentors.length,
        mentors
    })
    else if(!mentors) return next (new ErrorHandler(400, 'cannot fetch mentors details...'));
}))

/* post method */
/* create a mentor */
mentorRouter.post('/mentor', expressAsyncHandler( async (req, res, next) => {
    const {name, email} = req.body;
    if(!name) return next (new ErrorHandler(400, 'please enter mentor name...'));
    else if(!email) return next (new ErrorHandler(400, 'please enter mentor email address...'));
    const mentorEmail = await Mentor.findOne({email})
    if(mentorEmail) return next (new ErrorHandler(400, 'Already used this email address...'))
    const mentor = await Mentor({
        name,
        email
    });
    await mentor.save();
    if(mentor) return res.status(201).json({
        success: true,
        message: 'mentor details created...',
        mentor
    })
    else if(!mentor) return next (new ErrorHandler(400, 'cannot created mentor details...'));
}));

/* post method */
/* get mentor id */
mentorRouter.post('/mentor/:mentorId', expressAsyncHandler( async (req, res, next) => {
    const {mentorId} = req.params;
    if(!mentorId) return next (new ErrorHandler(400, 'please provide mentor Id...'));
    const mentor = await Mentor.findById({_id: mentorId});
    if(mentor) return res.status(200).json({
        success: true,
        message: 'get the mentor Id...',
        mentor
    })
    else if(!mentorId) return next (new ErrorHandler(400, 'Mentor id not found...'));
}));

module.exports = mentorRouter;