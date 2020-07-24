import React, { Component } from 'react';
import Badge from 'react-bootstrap/Badge';

import axios from 'axios';

export default class RegisterStep3 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            modules: [],
            subjects: [],
            modulesTeached: [],
            subjectsTeached: []
        }

    }

    // // // Recuperation de la valeur des champs d'inscription
    // onChange = (e) => {
    //     const element = e.target.name;
    //     this.setState({
    //         [element]: e.target.checked
    //     });
    //     alert(this.state.classYear)
    // }

    // onClick = (e) => {
    //     const element = "classYear"
    //     // temporary array to push needed data : will be used for new state
    //     var tempArray = []
    //     tempArray.push(e.target.id)
        
    //     this.setState({
    //         [element]: tempArray,
    //         selectText: e.target.id
    //     });
        
        
    // }

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
                    <p>Module(s) d'apprentissage</p>
                    <div className="form-checkbox">
                        <input className="form-check-input" type="checkbox"  value="" id="defaultCheck2"/>
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            Developpement web
                        </label>
                        </div>
                    <div className="form-checkbox"> 
                        <input className="form-check-input" type="checkbox" checked={this.state.tutorStatus} name="tutorStatus" value="" id="defaultCheck1" onChange={(e) => this.onChange(e)}/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Interactive Design
                        </label>
                    </div>
                    <div className="form-checkbox">
                        <input className="form-check-input" type="checkbox"  value="" id="defaultCheck2"/>
                        <label className="form-check-label" htmlFor="defaultCheck2">
                            E-business
                        </label>
                        </div>
                    <div className="form-checkbox"> 
                        <input className="form-check-input" type="checkbox" checked={this.state.tutorStatus} name="tutorStatus" value="" id="defaultCheck1" onChange={(e) => this.onChange(e)}/>
                        <label className="form-check-label" htmlFor="defaultCheck1">
                            Management et agilite
                        </label>
                    </div>

                    
                    <div className="form-group"> 
                        <label>Matiere(s) d'apprentissage </label>
                        <input  type="text"
                                className="form-control"
                                name="lastname"
                                value=""
                                 />
                                 <Badge variant="secondary">hhio</Badge>
                    </div>
                    
           
                </form>
            </div>
        )
    }
}