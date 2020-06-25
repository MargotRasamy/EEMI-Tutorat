import React from 'react';
import './button.scss';

const ButtonYellow = (props) => {
    return (
        <a class="a-link a-button a-button--yellow" href="#">
            {props.buttonText}
        </a>
    );
};

export default ButtonYellow;