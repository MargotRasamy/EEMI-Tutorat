import React from 'react';
import './button.scss';

const ButtonPurple = (props) => {
    return (
        <a class="a-link a-button a-button--purple" href="#">
            {props.buttonText}
        </a>
    );
};

export default ButtonPurple;