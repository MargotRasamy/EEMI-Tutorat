const express = require('express');

// # Utils
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors'); // Cross origin with React

// # DB & sessions
const mongoose = require('mongoose');
const session = require('express-session');
const jsonwebtoken = require('jsonwebtoken');
const jwt = require('express-jwt');

const { v4: uuidv4 } = require('uuid');
const MongoDBStore = require('connect-mongodb-session')(session);

dotenv.config();

// Controller
const UserController = require('./controller/UserController');
const CourseController = require('./controller/CourseController');

// # Middleware
// const withAuth = require('./middleware/is-auth');

// ENV CONST
const MONGODB_URI = process.env.MONGODB_URI;


const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(cookieParser());

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

/*
const store = new MongoDBStore({
  uri: MONGODB_URI,
  collection: 'sessions'
});
*/

mongoose.connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
});

const todoRoutes = express.Router();

// A mettre sous forme de middleware, pour l'instant c'est notre condition de loggin
const withAuth = () => { 
  app.use(
    jwt({
      secret: process.env.JWT_SECRET,
      algorithms: ['HS256'],
      getToken: req => req.cookies.token
    })  
  );
}


todoRoutes.route('/test').get(UserController.getById);
todoRoutes.route('/update/:id').post(UserController.updateUser);
todoRoutes.route('/add').post(UserController.addUser);
app.use('/todos', todoRoutes);

app.get('/get_all_courses', CourseController.getAllCourses);
app.post('/create_course', CourseController.addCourse);

app.post('/getMessages', UserController.getMessages);
app.post('/postMessage', UserController.addMessage);
app.post('/login', UserController.login);
app.post('/register', UserController.addUser);
app.get('/users', UserController.getAll);

const foods = [
  { id: 1, description: 'burritos' },
  { id: 2, description: 'quesadillas' },
  { id: 3, description: 'churos' }
];

// Toutes les routes en dessous de WithAuth, il faut être connecté 
withAuth()
app.get('/foods', (req, res) => {
  res.json(foods);
});

/*
app.get('/api/home', function(req, res) {
  res.send('Welcome!');
});
app.get('/api/secret', withAuth, function(req, res) {
  res.send('The password is potato');
});

/* Juste pour tester le token
app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});
*/

app.get('/', UserController.getAll);

app.listen(process.env.PORT, function() {
  console.log("Server is running on Port: " + process.env.PORT);
});