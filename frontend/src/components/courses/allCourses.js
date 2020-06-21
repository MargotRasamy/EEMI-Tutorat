import React, { Component } from 'react';

import { Link } from 'react-router-dom';
import axios from 'axios';


export default class AllCourses extends Component {

    constructor(props) {
        super(props);
        this.state = {courses: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/get_all_courses')
            .then(response => {
                console.log("response", response.data)
                this.setState({ courses: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    render() {
        const {courses} = this.state;
        const myCards = Object.keys(courses).map(i => 
            <div key={i}>
                <div>
                    <p>{courses[i].nameCourse}</p>
                    <p>{courses[i].date}</p>
                </div>
                <p>{courses[i].description_course}</p>
                <p>Tuteur: {courses[i].creator.firstname}</p>
                <p>Nombre maximum de participants: {courses[i].maxParticipants}</p>
            </div>
        );
        
        console.log("this.state", this.state)
        return (
            <div>
                Retrouve tous les cours ajoutés sur Studeemi.
                {myCards}
            </div>
        )
    }
}