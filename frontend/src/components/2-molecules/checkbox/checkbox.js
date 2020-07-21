import React from 'react';
import './checkbox.scss';


const Checkbox = ({label, forId, name, onChange, checked, disabled}) => {
    return (
        <div className="checkbox">
            <input type="checkbox" id={forId} name={name}
            checked={checked} onChange={onChange} disabled={disabled}/>
            <label for={forId}>{label}</label>
        </div>
    );
};

export default Checkbox;