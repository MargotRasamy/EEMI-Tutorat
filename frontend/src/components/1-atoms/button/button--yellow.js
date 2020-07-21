import React from 'react';
import './button.scss';


const ButtonYellow = ({type, innerText, onClick}) => {
    return (
        <button className="a-button a-button--yellow" 
        onClick={onClick}
        type={type}>
            {innerText}
        </button>
    );
};

export default ButtonYellow;