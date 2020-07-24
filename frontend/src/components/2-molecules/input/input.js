import React from 'react';
import './input.scss';
import '../../1-atoms/link-icon/link-icon--purple';

const Input = ({label, placeholder, forId, value, name, type, onChange}) => {
    return (
        <div className="m-input">
            <label htmlFor={forId}>{label}</label>
            <input type={type} id={forId} name={name} value={value} placeholder={placeholder}
            onChange={onChange}/>
        </div>
    );
};

export default Input;