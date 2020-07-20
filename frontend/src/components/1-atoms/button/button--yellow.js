import React from 'react';
import './button.scss';


const ButtonYellow = ({type, innerText}) => {
    return (
        <button className="a-button a-button--yellow" 
        type={type}>
            {innerText}
        </button>
    );
};

export default ButtonYellow;