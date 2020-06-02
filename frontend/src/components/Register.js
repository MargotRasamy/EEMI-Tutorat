import React, { Component } from 'react';

import axios from 'axios';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        }

    }

    // Recuperation de la valeur des champs d'inscription
    onChange = (e) => {
        const element = e.target.name;
        this.setState({
            [element]: e.target.value
        });
    }

    // Soumission du formulaire d'inscription
    onSubmit = (e) => {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Firstname is: ${this.state.firstname}, Lastname is: ${this.state.lastname}, Email is: ${this.state.email}`);
 
        // Creation d'un nouvel utilisateur
        const newUser = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password
        };

        // Envoi du nouvel utilisateur a la base de donnees (requete)
        // axios.post('http://localhost:4000/todos/add', newTodo)
        //     .then(res => console.log(res.data));

        // Reinitialisation de l'etat et des valeurs des champs
        this.setState({
            firstname: '',
            lastname: '',
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Inscription</h3>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="form-group"> 
                        <label>Prenom </label>
                        <input  type="text"
                                className="form-control"
                                name="firstname"
                                value={this.state.firstname}
                                onChange={(e) => this.onChange(e)} />
                    </div>
                    <div className="form-group"> 
                        <label>Nom </label>
                        <input  type="text"
                                className="form-control"
                                name="lastname"
                                value={this.state.lastname}
                                onChange={(e) => this.onChange(e)} />
                    </div>
                    <div className="form-group"> 
                        <label>Email </label>
                        <input  type="text"
                                className="form-control"
                                name="email"
                                value={this.state.email}
                                onChange={(e) => this.onChange(e)} />
                    </div>
                    <div className="form-group"> 
                        <label>Mot de passe </label>
                        <input  type="text"
                                className="form-control"
                                name="password"
                                value={this.state.password}
                                onChange={(e) => this.onChange(e)} />
                    </div>
                 
                    <div className="form-group">
                        <input type="submit" value="S'inscrire" className="btn btn-primary" />
                    </div>
                    
                </form>
            </div>
        )
    }
}