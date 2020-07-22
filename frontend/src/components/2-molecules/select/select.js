import React from 'react';
import './select.scss';


const Select = ({label, onChange, selectElements, defaultValueText}) => {
    return (
        <div className="select">
            <label for="select">{label}</label>
            <select id="select" onChange={onChange}>
                <option defaultValue>{defaultValueText}</option>
                {selectElements.map(
                    (element,i) => {
                        return <option
                        key={i} value={element}>{element}</option>
                    }
                ) }
            </select>
        </div>
    );
};

export default Select;