const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const UserController = require('./controller/UserController');


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

todoRoutes.route('/:id').get(UserController.getById);

todoRoutes.route('/update/:id').post(UserController.updateUser);

todoRoutes.route('/add').post(UserController.addUser);

todoRoutes.route('/register').post(UserController.addUser);

app.use('/todos', todoRoutes);





app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});