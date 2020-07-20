const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// Controller
const UserController = require('./controller/UserController');
const CourseController = require('./controller/CourseController');

const cookieParser = require('cookie-parser');

const withAuth = require('./middleware/is-auth');


const PORT = 4000;

const MONGODB_URI = 'mongodb+srv://dbTutorat:dbTutoratPassword@clusterdb-vc2cm.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});

const secret = 'mysecretsshhh';

const connection = mongoose.connection;

connection.once('open', function() {
  console.log("MongoDB database connection established successfully");
});

app.use(session({
  secret: 'dosivhoùwdifbi usd vç usd',
  resave: false,
  saveUninitialized: true,
  store: store,
  cookie: { secure: false }
}))

const todoRoutes = express.Router();

app.use(cors());
app.use(bodyParser.json());

app.use(cookieParser());

/*
app.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    User.findById(req.session.user._id)
      .then(user => {
        console.log("user find by the session");
        if (!user) {
          return next();
        }
        req.user = user;
        next();
      })
      .catch(err => {
        next(new Error(err));
      });
});
*/

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

app.get('/api/home', function(req, res) {
  res.send('Welcome!');
});
app.get('/api/secret', withAuth, function(req, res) {
  res.send('The password is potato');
});

app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
}

app.get('/', UserController.getAll);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});