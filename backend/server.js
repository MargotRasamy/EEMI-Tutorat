const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const UserController = require('./controller/UserController');
const CourseController = require('./controller/CourseController');

const mongoose = require('mongoose');


const PORT = 4000;

const todoRoutes = express.Router();

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb+srv://dbTutorat:dbTutoratPassword@clusterdb-vc2cm.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });

// Compass mongodb+srv://dbTutorat:dbTutoratPassword@clusterdb-vc2cm.mongodb.net/test

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

todoRoutes.route('/').get(UserController.getAll);

todoRoutes.route('/test').get(UserController.getById);

todoRoutes.route('/update/:id').post(UserController.updateUser);

todoRoutes.route('/add').post(UserController.addUser);

app.use('/todos', todoRoutes);

app.get('/get_all_courses', CourseController.getAllCourses);
app.post('/create_course', CourseController.addCourse);

app.post('/register', UserController.addUser)

app.post('/login', UserController.login)

app.get('/users', UserController.getAll)

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});