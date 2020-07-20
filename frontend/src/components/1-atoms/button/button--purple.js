import React from 'react';
import './button.scss';


const ButtonPurple = ({type, innerText}) => {
    return (
        <button className="a-button a-button--purple" 
        type={type}>
            {innerText}
        </button>
    );
};

export default ButtonPurple;