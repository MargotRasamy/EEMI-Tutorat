let Course = require('../model/course.model');

exports.getAllCourses = (req, res) => {
    Course.find()
    .populate('creator')
    .exec()
    .then(courses => {
        console.log("COURSES", courses)
        res.status(200).json(courses);
    })
}

exports.addCourse = (req, res) => {
    let body = req.body;
    let myNewCourse = new Course(body); 
    console.log("coucou", myNewCourse, req.body)
    myNewCourse.save()
        .then(user => {
            console.log("user added", user)
            res.status(200).json({'user' : "sucess" });
        })
        .catch(err => {
            res.status(400).send('adding new course failed');
        });
}