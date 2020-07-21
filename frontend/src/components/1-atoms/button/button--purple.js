import React from 'react';
import './button.scss';


const ButtonPurple = ({type, innerText, onClick}) => {
    return (
        <button className="a-button a-button--purple" 
        onClick={onClick}
        type={type}>
            {innerText}
        </button>
    );
};

export default ButtonPurple;