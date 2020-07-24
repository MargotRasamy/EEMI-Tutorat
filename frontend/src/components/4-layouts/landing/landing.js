import React, { Component } from 'react';
import axios from 'axios';
import Header from '../../3-organisms/header/header.js';
import Intro from '../../3-organisms/intro/intro';
import CaptionsSection from '../../3-organisms/captions-section/captions-section';

import './landing.scss';
import Caption from '../../2-molecules/caption/caption.js';

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
        console.log('hello from Landing')
        return (
            <div className="l-landing">
              <Intro/>
              <CaptionsSection/>
          
            </div>
            
           
        )
    }
}