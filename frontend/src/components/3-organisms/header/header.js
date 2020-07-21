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
    
    // # On remove le token du localStorage
    logout = () => {
        localStorage.removeItem('token');
    }
    render() {
        const {isLoggedIn} = this.props;
        return (
            <div className="o-header">
                {(isLoggedIn) ? <button class="btn btn-danger col-2" onClick={this.logout} >Log out</button> : null}
                <Logo/>
                <HeaderNav isLoggedIn={isLoggedIn}/>
            </div>
        )
    }
}