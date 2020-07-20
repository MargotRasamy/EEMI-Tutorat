import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from '../../2-molecules/input/input.js';
import axios from 'axios';
import ButtonYellow from '../../1-atoms/button/button--yellow.js';
import LinkTextPurple from '../../1-atoms/link-text/link-text--purple.js';
import './login.scss';

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
                
                if(res.status === 200) {
                    this.props.history.push("/");
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
            <div className="login">
                <h2>Connexion</h2>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <Input 
                    type="text"
                    placeholder="Entrez votre email"
                    forId="email-input"
                    name="email"
                    label="Email"
                    value={this.state.email}
                    onChange={(e) => this.onChange(e)}/>

                    <Input 
                    type="password"
                    placeholder="Entrez votre mot de passe"
                    forId="password-input"
                    name="password"
                    label="Mot de passe"
                    value={this.state.password}
                    onChange={(e) => this.onChange(e)}/>
                 
                    <ButtonYellow innerText="Se connecter" type="submit"/>

                    <p>Pas encore de compte ? <LinkTextPurple To="/register" innerText="Inscrivez-vous ici."/></p>
                  
                </form>
            </div>
        )
    }
}