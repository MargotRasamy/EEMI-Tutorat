let User = require('../model/user.model');
let Message = require('../model/message.model');
let Todo = require('../model/todo.model');
const bcrypt = require('bcryptjs');

const jsonwebtoken = require('jsonwebtoken');
const jwt = require('express-jwt');


var mongoose = require('mongoose');

exports.getAll = (req, res)  => {
    console.log('test dans getAll', req.session)
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
};

exports.getById = (req, res) => {
    User.findById('5eef6f62c145de2c9df0db29')
    .then(perso => {
        console.log("perso", perso)
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
        }); //12 est le salt length a generer)
}


// GET all message between A and B.
exports.getMessages = (req, res) => {
    const sender = req.body.sender;
    const receiver = req.body.receiver;

    var senderId;
    var receiverId;

    User.find({ email: {$in: [sender, receiver]}})
        .then(user => {
            console.log("got user ? ", sender, receiver)
            for (let i=0; i<user.length; i++) {
                console.log("loop", user[i].email)
                console.log("sender", sender, "receiver",receiver)
                if (user[i].email === sender) {
                    senderAll = user[i];
                    
                } 
                else if (user[i].email === receiver) {
                    receiverAll = user[i];
                }
            }
        if (senderAll && receiverAll) {
            let senderId = senderAll._id
            Message.find({ author: mongoose.Types.ObjectId(senderAll._id), receiver: mongoose.Types.ObjectId(receiverAll._id),})
                .then(messages => {
                    let replyToFront = {
                        author: senderAll,
                        receiver: receiverAll,
                        messages: messages
                    }
                    res.status(200).json({'messages' : replyToFront });
                }).catch(err => {console.log("Err get messages", err)})
        }
        })
        .catch(err => {
            console.log("ERROR", err)
        });
}

// Add a message 
exports.addMessage = (req, res) => {
    const sender = req.body.sender;
    const receiver = req.body.receiver;
    const messageText = req.body.message;

    var senderId;
    var receiverId;

    User.find({ email: {$in: [sender, receiver]}})
        .then(user => {
            for (let i=0; i<user.length; i++) {
                console.log("loop", user[i].email)
                console.log("sender", sender, "receiver",receiver)
                if (user[i].email === sender) {
                    senderId = user[i]._id;
                } 
                else if (user[i].email === receiver) {
                    receiverId = user[i]._id;
                }
            }
        if (senderId && receiverId) {
            const d = new Date();
            const myDate = `${d.getFullYear()}-0${d.getMonth()}-${d.getDate()}`
            
            const newMessage = {
                author: mongoose.Types.ObjectId(senderId),
                receiver: mongoose.Types.ObjectId(receiverId),
                message: messageText,
                date: new Date()
            }
            let message = new Message(newMessage)
            message.save()
                .then(res => {
                    console.log("Add message success:", res)
                })
                .catch(err => {
                    res.status(400).send('adding new message failed');
                });
           }
        })
        .catch(err => {
            console.log("ERROR", err)
          });
}

// Login post
exports.login = (req, res) => {
    let newPasswordToValidate = req.body.password;
    User.findOne({email : req.body.email})
        .then((user) => {
            // bcrypt.compare(unhashed password, hashed password from database)
            bcrypt.compare(newPasswordToValidate, user.password)
            .then(match => {
                if (match){
                    // Ici on a le bon user : bon email et bon mdp
                    const token = jsonwebtoken.sign({ user: req.body.email }, "hellooo");
                    res.cookie('token', token, { httpOnly: true });
                    res.json({ token });
                }
                else {
                    res.status(400).send('Either mail or password is wrong');
                }
            });
        })
        .catch(err => {
            res.status(400).send('login user failed');
        });
}

