import React, { Component } from 'react';
import axios from 'axios';

import ButtonPurple from '../../1-atoms/button/buttonPurple.js';
import ButtonYellow from '../../1-atoms/button/buttonYellow.js';

export default class Landing extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         firstname: '',
    //         lastname: '',
    //         email: '',
    //         password: '',
    //         passwordConfirmation: ''
    //     }

    // }

    render() {
        return (
            <div>
                <ButtonPurple buttonText="Connexion"/>
                <ButtonYellow buttonText="Inscription"/>

            </div>
        )
    }
}