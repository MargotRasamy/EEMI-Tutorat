import React, {Component} from 'react';
import axios from 'axios';


import LinkButtonPurple from '../../1-atoms/button/link-button--purple.js';
import Logo from '../../1-atoms/logo/logo.js';
import './intro.scss';

class Intro extends Component {
	state = {
		message:''
	}

	componentDidMount() {
		axios.get('http://localhost:4000/api/secret') // On envoie newUser dans le body
            .then(res => {
            	this.setState({message: res.data})
                
                /* if(res.status === 200) {
                    this.props.history.push("/");
                } */
            }
        );
	}

	render() {
	    return (
	        <div className="o-intro">
	            <Logo/>
	            <p>{this.state.message}</p>
	            <p>Studeemi est une plateforme de tutorat interne aux étudiants de l’EEMI (École Européenne des Métiers de l'Internet) qui permet d’organiser les séances de tutorat en présentiel et de faciliter la prise de contact entre tuteurs et élèves.</p>
	            <LinkButtonPurple To="/login" innerText="Commencer"/>
	        </div>
	    );
	}
};

export default Intro;