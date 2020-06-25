import React, { Component, Fragment } from 'react';
import ButtonPurple from '../../1-atoms/button/button--purple.js';
import ButtonYellow from '../../1-atoms/button/button--yellow.js';
import './header-nav.scss';
import LinkTextPurple from '../../1-atoms/link-text/link-text--purple';
import Avatar from '../../1-atoms/avatar/avatar';
import NotificationIcon from '../../../assets/icons/notification-bell.svg';
import AvatarTest from '../../../assets/images/avatars/1.jpg';

import LinkIconPurple from '../../1-atoms/link-icon/link-icon--purple';


export default class HeaderNav extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoggedIn : false
        }

    }

    render() {
        return (
            <Fragment>
                {this.state.isLoggedIn
                    ? <div className="m-header-nav">
                        <ButtonPurple innerText="Connexion"/>
                        <ButtonYellow innerText="Inscription"/>
                    </div>
                    : <div className="m-header-nav--connected">
                        <LinkTextPurple innerText="Mes messages"/>
                        <img src={NotificationIcon}/>
                        <Avatar To="/login" ImgSrc={AvatarTest}/>
                    </div>
                }

            </Fragment>
        )
    }
}