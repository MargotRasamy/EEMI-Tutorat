let User = require('../model/user.model');
let Todo = require('../model/todo.model');
const bcrypt = require('bcryptjs');


// S'occupe de gérer les utilisateurs




exports.getAll = (req, res)  => {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
};

exports.getById = (req, res) => {
    let id = req.params.id;
    Todo.findById(id, function(err, todo) {
        res.json(todo);
    });
}

exports.updateUser = (req, res) => {
    Todo.findById(req.params.id, function(err, todo) {
        if (!todo)
            res.status(404).send("data is not found");
        else
            todo.todo_description = req.body.todo_description;
            todo.todo_responsible = req.body.todo_responsible;
            todo.todo_priority = req.body.todo_priority;
            todo.todo_completed = req.body.todo_completed;     
                   
            todo.save().then(todo => {
                res.json('Todo updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
}

exports.addUser = (req, res) => {
    let password = req.body.password;
    bcrypt.hash(password, 12)
        .then( (hashedPassword) => {
            let newUser = {
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                password : hashedPassword
            }
            let user = new User(newUser); // req.body = newUser envoie avec axios dans frontend
            user.save()
                .then(user => {
                    res.status(200).json({'user' : "sucess" });
                })
                .catch(err => {
                    res.status(400).send('adding new user failed');
                });
                } ) //12 est le salt length a generer)
}


// Login 
exports.login = (req, res) => {

    let newPasswordToValidate = req.body.password;
    User.findOne({email : req.body.email})
        .then((user) => {
            
            // bcrypt.compare(unhashed password, hashed password from database)
            bcrypt.compare(newPasswordToValidate, user.password)
                .then(match => {
                    if (match){
                        res.status(200).json({'user' : user }); // json is res.data sent to front end
                        console.log('connexion reussie')
                        
                    }
                    else {
                        res.status(400).send('Either mail or password is wrong');
                    }
                })
        })
        .catch(err => {
            res.status(400).send('login user failed');
        });
    // bcrypt.compare()
    //         let user = new User(newUser); // req.body = newUser envoye avec axios dans frontend
    //         user.save()
    //             .then(user => {
    //                 res.status(200).json({'user' : "sucess" });
    //             })
    //             .catch(err => {
    //                 res.status(400).send('adding new user failed');
    //             });
    //             } ) //12 est le salt length a generer)
}

