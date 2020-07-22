import React from 'react';
import Input from '../../2-molecules/input/input.js';
import './tags-input.scss';

const RegisterStep1 = ({onChange, onClickNextBtn}) => {
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
        </div>
    );
};

export default RegisterStep1;