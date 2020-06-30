import React from 'react';
import './link-text.scss';
import { NavLink } from 'react-router-dom';

const LinkTextWhite = (props) => {
    return (
        <NavLink className="a-link-text a-link-text--white" to={props.To}>
            {props.innerText}
        </NavLink>
    );
};

export default LinkTextWhite;