import React from 'react';
import './button.scss';
import { NavLink } from 'react-router-dom';

const LinkButtonYellow = (props) => {
    return (
        <NavLink className="a-button a-button--yellow" to={props.To}>
            {props.innerText}
        </NavLink>
    );
};

export default LinkButtonYellow;