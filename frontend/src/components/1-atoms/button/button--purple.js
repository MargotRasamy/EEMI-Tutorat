import React from 'react';
import './button.scss';

const ButtonPurple = (props) => {
    return (
        <a class="a-button a-button--purple" href="#">
            {props.innerText}
        </a>
    );
};

export default ButtonPurple;