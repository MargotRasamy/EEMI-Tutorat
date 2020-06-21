import React, { Component } from 'react';

import axios from 'axios';

export default class CreateCourse extends Component {

    constructor(props) {
        super(props);

        this.state = {
            module: '',
            nameCourse: '',
            description_course: '',
            date: '',
            maxParticipants: '',
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

        console.log(`Form submitted: ${this.state.module}, ${this.state.nameCourse}, ${this.state.description_course}, ${this.state.date}, ${this.state.maxParticipants}`);
 
        // Creation d'un nouvel utilisateur
        const newCourse = {
            creator: process.env.REACT_APP_ID_USER,
            module: this.state.module,
            nameCourse: this.state.nameCourse,
            description_course: this.state.description_course,
            date: this.state.date,
            maxParticipants: parseInt(this.state.maxParticipants),
        };

        // Envoi du nouvel utilisateur a la base de donnees (requete
        axios.post('http://localhost:4000/create_course', newCourse) // On envoie newUser dans le body
            .then(res => console.log("Course added ?" + res.status));
        

        // Reinitialisation de l'etat et des valeurs des champs
        this.setState({
            module: '',
            nameCourse: '',
            description_course: '',
            date: '',
            maxParticipants: '',
        });
    }

    render() {
        return (
            <div>
                <h3>Créer un nouveau cours</h3>
                {/* Stepper for registering steps */}
                <div className="progress registering-progress" style={{height: "3px"}}>
                    <div className="progress-bar registering-stepper-progress" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <form onSubmit={(e) => this.onSubmit(e)}>
                    <div className="form-group">
                        <label htmlFor="module_concerne">Module concerné</label>
                        <select onChange={(e) => this.onChange(e)} className="form-control" id="module_concerne" name="module">
                            <option value="">Choisis le module du cours</option>
                            <option value="dev">Développement Web</option>
                            <option value="design" >Interactive Design</option>
                            <option value="marketing" >E-Business</option>
                            <option value="management">Management & Agilité</option>
                        </select>
                    </div>
                    <div className="form-group"> 
                        <label>Nom du cours </label>
                        <input  type="text"
                                className="form-control"
                                name="nameCourse"
                                //value={this.state.nameCourse}
                                onChange={(e) => this.onChange(e)} />
                    </div>
                    <div className="form-group"> 
                        <label>Description du cours </label>
                        <textarea 
                            className="form-control"
                            name="description_course"
                            value={this.state.description_course}
                            onChange={(e) => this.onChange(e)} />
                    </div>
                    <div className="form-group"> 
                        <label>Date du cours </label>
                        <input  type="text"
                                className="form-control"
                                name="date"
                                value={this.state.date}
                                onChange={(e) => this.onChange(e)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="maxParticipants">Nombre maximal de participants</label>
                        <select onChange={(e) => this.onChange(e)} className="form-control" name="maxParticipants" id="maxParticipants">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Créer" className="btn btn-primary" />
                    </div>
                    
                </form>
            </div>
        )
    }
}