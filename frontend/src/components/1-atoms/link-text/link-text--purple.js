import React from 'react';
import Link from 'react-router-dom';
import './link-text.scss';
import { NavLink } from 'react-router-dom';

const LinkTextPurple = (props) => {
    return (
        <NavLink className="a-link-text a-link-text--purple" to={props.To}>
            {props.innerText}
        </NavLink>
    );
};

export default LinkTextPurple;