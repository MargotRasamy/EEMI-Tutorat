import React from 'react';
import './button.scss';

const ButtonYellow = (props) => {
    return (
        <a class="a-button a-button--yellow" href="#">
            {props.innerText}
        </a>
    );
};

export default ButtonYellow;