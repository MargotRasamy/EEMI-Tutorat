import React from 'react';
import ButtonPurple from '../../1-atoms/button/buttonPurple.js';
import ButtonYellow from '../../1-atoms/button/buttonYellow.js';
import './header-nav.scss';

const HeaderNav = (props) => {
    return (
        <div className="m-header-nav">
            <ButtonPurple buttonText="Connexion"/>
            <ButtonYellow buttonText="Inscription"/>
        </div>
    );
};

export default HeaderNav;