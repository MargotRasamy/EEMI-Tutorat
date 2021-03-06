import React from 'react';
import LinkButtonPurple from '../../1-atoms/button/link-button--purple.js';
import Logo from '../../1-atoms/logo/logo.js';
import './intro.scss';

const Intro = () => {
    return (
        <div className="o-intro">
            <Logo/>
            <p>Studeemi est une plateforme de tutorat interne aux étudiants de l’EEMI (École Européenne des Métiers de l'Internet) qui permet d’organiser les séances de tutorat en présentiel et de faciliter la prise de contact entre tuteurs et élèves.</p>
            <LinkButtonPurple To="/login" innerText="Commencer"/>
        </div>
    );
};

export default Intro;