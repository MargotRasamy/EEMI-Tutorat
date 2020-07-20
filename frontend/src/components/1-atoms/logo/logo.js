import React from 'react';
import './logo.scss';
import { NavLink } from 'react-router-dom';

const ButtonPurple = () => {
    return (
        <NavLink className="a-logo" to="/">
            Stud<strong>eemi</strong>
        </NavLink>
    );
};

export default ButtonPurple;