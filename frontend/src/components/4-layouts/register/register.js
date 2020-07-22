import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import Input from '../../2-molecules/input/input.js';
import axios from 'axios';
import ButtonYellow from '../../1-atoms/button/button--yellow.js';
import LinkTextPurple from '../../1-atoms/link-text/link-text--purple.js';
import RegisterStep1 from './registerStep1';
import RegisterStep2 from './registerStep2';
import RegisterStep3 from './registerStep3';
import RegisterStep4 from './registerStep4';
import './register.scss';

export default class Register extends Component {

    constructor(props) {
        super(props);

        this.state = {
            firstname: '', 
            lastname: '',
            email: '',
            password: '',
            passwordConfirmation: '',
            tutorStatus : false,
            classYear : '',
            modules : [],
            subjects : [],
            modulesTeached : [],
            subjectsTeached : [],
            stepperValue : 0
        }

    }

    // Recuperation de la valeur des champs d'inscription
    onChange = (e) => {
        const element = e.target.name;
        this.setState({
            [element]: e.target.value
        });
    }

    // Previous component stepper
    onClickPrevious = () => {
        this.setState({
            stepperValue : this.state.stepperValue -= 25
        })
    }

    // Next component stepper
    onClickNext = () => {
        this.setState({
            stepperValue : this.state.stepperValue += 25
        })
    }

    // Detect the status of the user
    onChangeTutorStatus = (e) => {
        
        const element = e.target.name;
        this.setState({
            [element]: e.target.checked
        });
    }

    onSelectClassYear = (e) => {
        e.preventDefault()
        this.setState({
            classYear: e.target.value
        });
    }

    // Check modules
    onCheckModules = (e) => {     
        if (e.target.checked) {
            this.state.modules.push(e.target.name)
            this.setState({
            modules : this.state.modules
            });
        }
        else {
            var tempModules = this.state.modules.filter(
                (element) => element != e.target.name
            )
            this.setState({
                modules : tempModules
            });
        }
    }

    onCheckModulesTeached= (e) => {
        if (e.target.checked) {
            this.state.modulesTeached.push(e.target.name)
            this.setState({
            modulesTeached : this.state.modulesTeached
            });
        }
        else {
            var tempModules = this.state.modulesTeached.filter(
                (element) => element != e.target.name
            )
            this.setState({
                modulesTeached : tempModules
            });
        }
    }

    // Soumission du formulaire d'inscription
    // onSubmit = (e) => {
    //     e.preventDefault();

    //     if (this.state.password === this.state.passwordConfirmation){
            
    //         console.log(`Form submitted:`);
    //         console.log(`Firstname is: ${this.state.firstname}, Lastname is: ${this.state.lastname}, Email is: ${this.state.email}`);
     
    //         // Creation d'un nouvel utilisateur
    //         const newUser = {
    //             firstname: this.state.firstname,
    //             lastname: this.state.lastname,
    //             email: this.state.email,
    //             password: this.state.password,
    //             passwordConfirmation: this.state.passwordConfirmation
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
    //             passwordConfirmation: ''
    //         })

    //     }
    //     else {
    //         alert('Mots de passe non identiques')
    //     }
    // }

    render() {
        
        return (
            <div className="register">
                <h2>Inscription</h2>

                {/* Stepper for registering steps */}
                <div class="progress registering-progress" style={{height: "3px"}}>
                    <div class="progress-bar registering-stepper-progress" role="progressbar" 
                    style={{width: this.state.stepperValue + '%'}} aria-valuenow={this.state.stepperValue} aria-valuemin="0" aria-valuemax="100"></div>
                </div>

                <form>
                
                { this.state.stepperValue < 25 &&
                <RegisterStep1 
                onChange={(e) => this.onChange(e)}
                onClickPreviousBtn={ (e) => this.onClickPrevious(e)}
                onClickNextBtn={ (e) => this.onClickNext(e)}
                /> }

                { this.state.stepperValue === 25 &&
                <RegisterStep2
                onClickPreviousBtn={ (e) => this.onClickPrevious(e)}
                onClickNextBtn={ (e) => this.onClickNext(e)}
                onChange={(e) => this.onChangeTutorStatus(e)}
                onSelect={(e) => this.onSelectClassYear(e)}
                tutorStatus={this.state.tutorStatus}
                 /> }


                { this.state.stepperValue === 50 &&
                <RegisterStep3
                onClickPreviousBtn={ (e) => this.onClickPrevious(e)}
                onClickNextBtn={ (e) => this.onClickNext(e)}
                onChange={(e) => this.onChange(e)}
                tutorStatus={this.state.tutorStatus}
                onCheckModules={(e) => this.onCheckModules(e)}
                onCheckModulesTeached={(e) => this.onCheckModulesTeached(e)}
                 /> }

                {/* <RegisterStep3/>
                <RegisterStep4/> */} 
                </form>
               
            </div>
        )
    }
}