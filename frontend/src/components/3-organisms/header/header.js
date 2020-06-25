import React, { Component } from 'react';
import axios from 'axios';

import HeaderNav from '../../2-molecules/header-nav/header-nav';
import Logo from '../../1-atoms/logo/logo';
import './header.scss';
export default class Header extends Component {

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
            <div className="o-header">
                    <Logo/>
                    <HeaderNav/>
            </div>
        )
    }
}