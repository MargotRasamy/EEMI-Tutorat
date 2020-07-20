import React from 'react';
import Input from '../../2-molecules/input/input.js';
import ButtonYellow from '../../1-atoms/button/button--yellow.js';
import ButtonPurple from '../../1-atoms/button/button--purple.js';
import LinkTextPurple from '../../1-atoms/link-text/link-text--purple.js';
import './register--step1.scss';

const RegisterStep1 = ({onChange}) => {
    return (
        <div className="register-step1">
            <Input 
                type="text"
                placeholder="Entrez votre prénom"
                forId="firstname-input"
                name="firstname"
                label="Prénom"
                onChange={onChange}
            />
            <Input 
                type="text"
                placeholder="Entrez votre nom"
                forId="lastname-input"
                name="lastname"
                label="Nom"
                onChange={onChange}
            />
            <Input 
                type="text"
                placeholder="Entrez votre email"
                forId="email-input"
                name="email"
                label="Email"
                onChange={onChange}
            />
            <Input 
                type="password"
                placeholder="Entrez votre mot de passe"
                forId="password-input"
                name="password"
                label="Mot de passe"
                onChange={onChange}
            />
            <Input 
                type="password"
                placeholder="Confirmez votre mot de passe"
                forId="passwordConfirmation-input"
                name="passwordConfirmation"
                label="Confirmation de mot de passe"
                onChange={onChange}
            />
            <ButtonPurple innerText="RETOUR"/>
            <ButtonYellow innerText="ETAPE SUIVANTE"/>

            <p>Déjà inscrit ? <LinkTextPurple To="/register" innerText="Connectez-vous ici."/></p>
        </div>
    );
};

export default RegisterStep1;