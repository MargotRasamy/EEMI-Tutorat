import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

import axios from 'axios';

export default class RegisterStep2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            tutorStatus: false,
            classYear: [],
            selectText: "Votre annee a l'EEMI"
        }

    }

    // // Recuperation de la valeur des champs d'inscription
    onChange = (e) => {
        const element = e.target.name;
        this.setState({
            [element]: e.target.checked
        });
        alert(this.state.classYear)
    }

    onClick = (e) => {
        const element = "classYear"
        // temporary array to push needed data : will be used for new state
        var tempArray = []
        tempArray.push(e.target.id)
        
        this.setState({
            [element]: tempArray,
            selectText: e.target.id
        });
        
        
    }

    // // Soumission du formulaire d'inscription
    // onSubmit = (e) => {
    //     e.preventDefault();

    //     if (this.state.password === this.state.passwordconfirmation){
            
    //         console.log(`Form submitted:`);
    //         console.log(`Firstname is: ${this.state.firstname}, Lastname is: ${this.state.lastname}, Email is: ${this.state.email}`);
     
    //         // Creation d'un nouvel utilisateur
    //         const newUser = {
    //             firstname: this.state.firstname,
    //             lastname: this.state.lastname,
    //             email: this.state.email,
    //             password: this.state.password,
    //             passwordconfirmation: this.state.passwordconfirmation
    //         };
    
    //         // Envoi du nouvel utilisateur a la base de donnees (requete
    //         axios.post('http://localhost:4000/register', newUser) // On envoie newUser dans le body
    //             .then(res => console.log("hello its me" + res.data));
            
    
    //         // Reinitialisation de l'etat et des valeurs des champs
    //         this.setState({
    //             firstname: '',
    //             lastname: '',
    //             email: '',
    //             password: '',
    //             passwordconfirmation: ''
    //         })

    //     }
    //     else {
    //         alert('hello')
    //     }
    // }

    render() {
        return (
            <div>
                
                <form>
                    <p>Statut du compte </p>
                    
                    <div className="form-checkbox">
                        <input className="form-check-input" type="checkbox" checked value="" id="defaultCheck2" disabled/>
                        <label className="form-check-label" for="defaultCheck2">
                            Eleve
                        </label>
                        </div>
                    <div className="form-checkbox"> 
                        <input className="form-check-input" type="checkbox" checked={this.state.tutorStatus} name="tutorStatus" value="" id="defaultCheck1" onChange={(e) => this.onChange(e)}/>
                        <label className="form-check-label" for="defaultCheck1">
                            Tuteur
                        </label>
                    </div>

                    <p>Renseigner votre classe actuelle </p>
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" style={{width:"300px"}}>
                            {this.state.selectText}
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item id="1A" onClick={(e) => this.onClick(e)} href="#/class">1A</Dropdown.Item>
                            <Dropdown.Item id="2A Initial" onClick={(e) => this.onClick(e)} href="#/class">2A Initial</Dropdown.Item>
                            <Dropdown.Item id="2A Developpement web" onClick={(e) => this.onClick(e)} href="#/class">2A Developpement web</Dropdown.Item>
                            <Dropdown.Item id="2A Design" onClick={(e) => this.onClick(e)} href="#/class">2A Design</Dropdown.Item>
                            <Dropdown.Item id="3A Initial" onClick={(e) => this.onClick(e)} href="#/class">3A Initial</Dropdown.Item>
                            <Dropdown.Item id="3A Developpement web" onClick={(e) => this.onClick(e)} href="#/class">3A Developpement web</Dropdown.Item>
                            <Dropdown.Item id="3A Design" onClick={(e) => this.onClick(e)} href="#/class">3A Design</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    
           
                </form>
            </div>
        )
    }
}