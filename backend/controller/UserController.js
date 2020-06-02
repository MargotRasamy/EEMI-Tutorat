let User = require('../model/user.model');
let Todo = require('../model/todo.model');


// S'occupe de gérer les utilisateurs




exports.getAll = (req, res)  => {
    Todo.find(function(err, todos) {
        if (err) {
            console.log(err);
        } else {
            res.json(todos);
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
    let user = new User(req.body); // req.body = newUser envoye avec axios dans frontend
    user.save()
        .then(user => {
            res.status(200).json({'user' : "sucess" });
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
}