import React, { Component, Fragment } from 'react';
import LinkButtonPurple from '../../1-atoms/button/link-button--purple.js';
import LinkButtonYellow from '../../1-atoms/button/link-button--yellow.js';
import './header-nav.scss';
import LinkTextPurple from '../../1-atoms/link-text/link-text--purple';
import Avatar from '../../1-atoms/avatar/avatar';
import NotificationIcon from '../../../assets/icons/notification-bell.svg';
import AvatarTest from '../../../assets/images/avatars/1.jpg';

import LinkIconPurple from '../../1-atoms/link-icon/link-icon--purple';


export default class HeaderNav extends Component {

   
    
    render() {
        return (
            <Fragment>
                { this.props.isLoggedIn
                    ? <div className="m-header-nav--connected">
                        <LinkTextPurple To="/message" innerText="Mes messages"/>
                        <img src={NotificationIcon}/>
                        <Avatar To="/login" ImgSrc={AvatarTest}/>
                    </div>
                    : <div className="m-header-nav">
                        <LinkButtonPurple To="/login" innerText="Connexion"/>
                        <LinkButtonYellow To="/register" innerText="Inscription"/>
                    </div>
                }

            </Fragment>
        )
    }
}