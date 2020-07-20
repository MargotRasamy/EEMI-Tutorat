import React from 'react';
import './select.scss';


const Select = ({label, placeholder, forId, value, name, type, onChange}) => {
    return (
        <div className="select">
            <label for="select">Renseigner votre classe actuelle</label>
            <select id="select">
                <option value="fr" selected>-- Votre année à l'EEMI --</option>
                <option value="1A" >1A</option>
                <option value="2A Initial" >2A Initial</option>
                <option value="2A Developpement web" >2A Developpement web</option>
                <option value="2A Design" >2A Design</option>
                <option value="3A Initial" >3A Initial</option>
                <option value="3A Developpement web" >3A Developpement web</option>
                <option value="3A Design" >3A Design</option>
            </select>
        </div>
    );
};

export default Select;