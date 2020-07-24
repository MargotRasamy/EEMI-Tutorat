import React, { Component } from 'react';
import { connect } from 'react-redux';

import HeaderNav from '../../2-molecules/header-nav/header-nav';
import Logo from '../../1-atoms/logo/logo';
import './header.scss';


class Header extends Component {    
    // # On remove le token du localStorage
    logout = () => {
        localStorage.removeItem('token');
        this.props.setLogout()
    }
    render() {
        const {isLoggedIn, setLogout} = this.props;
        return (
            <div className="o-header">
                {(isLoggedIn) ? <button class="btn btn-danger col-2" onClick={this.logout} >Log out</button> : null}
                <Logo/>
                <HeaderNav isLoggedIn={isLoggedIn}/>
            </div>
        )
    }
}

const getProps = state => {
    return {
      isLoggedIn : state.isLoggedIn,
    }
}

const setProps = dispatch => {
return {
    setLogout: () => {
    dispatch({type: "LOGOUT", logout: null});
    },
}
}; 
  export default connect(getProps, setProps)(Header);