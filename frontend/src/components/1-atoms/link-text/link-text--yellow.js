import React from 'react';
import './link-text.scss';
import { NavLink } from 'react-router-dom';

const LinkTextYellow = (props) => {
    return (
        <NavLink className="a-link-text a-link-text--yellow" to={props.To}>
            {props.innerText}
        </NavLink>
    );
};

export default LinkTextYellow;