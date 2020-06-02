import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import axios from 'axios';

export default class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }

    }

    // Recuperation de la valeur des champs de connexion
    onChange = (e) => {
        const element = e.target.name;
        this.setState({
            [element]: e.target.value
        });
    }

    // Soumission du formulaire de connexion
    onSubmit = (e) => {
        e.preventDefault();
        
        console.log(`Connexion form submitted:`);
        console.log(`Email is: ${this.state.email}`);
 
        // Creation d'un nouvelle validation d'utilisateur
        const newUserToValidate = {
            email: this.state.email,
            password: this.state.password
        };

        // Envoi du nouvel utilisateur a la base de donnees (requete
        axios.post('http://localhost:4000/login', newUserToValidate) // On envoie newUser dans le body
            .then(res => {
                
                console.log('res', res)
                console.log('res.status', res.status)
                if(res.status === 200) {
                    this.props.history.push("/")
                }
            }
            );
    
        // Si la connexion est reussie, rediriger vers le site (dashboard)
        

        // Reinitialisation de l'etat et des valeurs des champs
        this.setState({
            email: '',
            password: ''
        })
    }

    render() {
        return (
            <div>
                <h3>Connexion</h3>
                <form onSubmit={(e) => this.onSubmit(e)}>
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
                        <input type="submit" value="Se connecter" className="btn btn-primary" />
                    </div>
                    
                </form>
            </div>
        )
    }
}