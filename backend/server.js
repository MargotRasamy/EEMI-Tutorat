const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const mongoose = require('mongoose');
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

// Controller
const UserController = require('./controller/UserController');

const isAuth = require('./middleware/is-auth');

const PORT = 4000;
const todoRoutes = express.Router();

app.use(cors());
app.use(bodyParser.json());

const MONGODB_URI = 'mongodb+srv://dbTutorat:dbTutoratPassword@clusterdb-vc2cm.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

const store = new MongoDBStore({
    uri: MONGODB_URI,
    collection: 'sessions'
});
app.use(session({secret: 'ssshhhhh',saveUninitialized: false,resave: false, store: store,  cookie: { httpOnly: false }}));

// Compass mongodb+srv://dbTutorat:dbTutoratPassword@clusterdb-vc2cm.mongodb.net/test

const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

app.use((req, res, next) => {
    // throw new Error('Sync Dummy');
    console.log("hello from server.JS!", req.session)
    if (!req.session.user) {
        return next();
    }
    User.findById(req.session.user._id)
      .then(user => {
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

  
app.get('/', UserController.getAll);

todoRoutes.route('/:id').get(UserController.getById);

todoRoutes.route('/update/:id').post(UserController.updateUser);

todoRoutes.route('/add').post(UserController.addUser);

app.use('/todos', todoRoutes);

app.post('/register', UserController.addUser)

app.post('/login', UserController.login)

app.get('/users', UserController.getAll)

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});