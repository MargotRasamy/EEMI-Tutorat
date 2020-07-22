import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from '../../2-molecules/select/select.js'
import Checkbox from '../../2-molecules/checkbox/checkbox.js';
import './register--step2.scss';
import ButtonYellow from '../../1-atoms/button/button--yellow.js';
import ButtonPurple from '../../1-atoms/button/button--purple.js';

export default class RegisterStep2 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // List of classes and levels in school
            classYearList : ['1A', '2A Initial', "2A Developpement web",
            "2A Design", "3A Initial", "3A Developpement web", "3A Design"] 
        }

    }


    render() {
        const {onChange, onClickPreviousBtn, onClickNextBtn, tutorStatus, onSelect} = this.props
        return (
            <div className="register-step2">
                <div>
                   <p class="label">Statut du compte </p>
                    <p>En vous inscrivant sur Studeemi, vous serez automatiquement un élève. 
                    Vous pouvez également activer un statut de tuteur. Ces options sont toujours
                    modifiables dans les paramètres du compte.</p>
                    <Checkbox label="Elève" 
                        forId="studentStatus" 
                        name="studentStatus" 
                        checked disabled
                    />
                    <Checkbox label="Tuteur" 
                        forId="tutorStatus" 
                        name="tutorStatus"  
                        onChange={onChange} 
                        checked={tutorStatus} 
                      /> 
                </div>
                    
                <Select 
                label="Renseigner votre classe actuelle"
                defaultValueText="-- Votre année à l'EEMI --"
                selectElements={this.state.classYearList}
                onChange={onSelect}/>
                
                <div className="button-container">
                    <ButtonPurple type="button" innerText="RETOUR" onClick={onClickPreviousBtn}/>
                    <ButtonYellow type="button" innerText="ETAPE SUIVANTE" onClick={onClickNextBtn}/>
                </div>
            </div>
        )
    }
}