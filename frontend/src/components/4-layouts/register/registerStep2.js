import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from '../../2-molecules/select/select.js'

const RegisterStep2 = (props) => {
    return (
        <div className="registerStep2">
            <form>
                    <p>Statut du compte </p>
                    <div>
                        <input type="checkbox" id="scales" name="scales"
                                checked/>
                        <label for="scales">Eleve</label>
                    </div>
                    <div>
                        <input type="checkbox" id="scales" name="scales"
                                checked/>
                        <label for="scales">Tuteur</label>
                    </div>
                    
                    <Select />
           
                </form>
        </div>
    );
};

export default RegisterStep2;