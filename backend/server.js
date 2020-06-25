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

const isAuth = require('./middleware/is-auth');

const PORT = 4000;

const MONGODB_URI = 'mongodb+srv://dbTutorat:dbTutoratPassword@clusterdb-vc2cm.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});

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

app.use((req, res, next) => {
    if (!req.session.user) {
        console.log("no session from server.js", req.session);
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

todoRoutes.route('/test').get(UserController.getById);
todoRoutes.route('/update/:id').post(UserController.updateUser);
todoRoutes.route('/add').post(UserController.addUser);
app.use('/todos', todoRoutes);

app.get('/get_all_courses', CourseController.getAllCourses);
app.post('/create_course', CourseController.addCourse);

app.post('/login', UserController.login)
app.post('/register', UserController.addUser)
app.get('/users', UserController.getAll)

app.get('/', UserController.getAll);

app.listen(PORT, function() {
  console.log("Server is running on Port: " + PORT);
});