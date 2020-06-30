import React from 'react';
import './button.scss';
import { NavLink } from 'react-router-dom';

const ButtonPurple = (props) => {
    console.log(props)
    return (
        <NavLink className="a-button a-button--purple" to={props.To}>
            {props.innerText}
        </NavLink>
      
    );
};

export default ButtonPurple;