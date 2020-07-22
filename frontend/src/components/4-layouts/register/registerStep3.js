import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import Select from '../../2-molecules/select/select.js'
import Checkbox from '../../2-molecules/checkbox/checkbox.js';
import Input from '../../2-molecules/input/input.js';
import './register--step3.scss';
import ButtonYellow from '../../1-atoms/button/button--yellow.js';
import ButtonPurple from '../../1-atoms/button/button--purple.js';
import TagsInput from '../../2-molecules/tags-input/tagsInput.js';

export default class RegisterStep3 extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // List of modules
            modulesAvailable : [
                {
                    label : 'Développement web',
                    name : 'webDev'
                },
                {
                    label : 'Interactive design',
                    name : 'design'
                },
                {
                    label : 'E-Business',
                    name : 'eBusiness'
                },
                {
                    label : 'Management & Agilité',
                    name : 'management'
                }
            ]
        }

    }


    render() {
        const {onClickPreviousBtn, onClickNextBtn, tutorStatus, onCheckModules, onCheckModulesTeached} = this.props
        
        return (
            <div className="register-step3">
                <div class="modules">
                   <div class="modules-choice">
                    <p class="label">Module(s) d'apprentissage(s)</p>
                    {this.state.modulesAvailable.map(
                        (module, i) => {
                            return <Checkbox label={module.label}
                            forId={module.name} 
                            name={module.name} 
                            key={i}
                            onChange={onCheckModules}
                            />
                        }
                    )}
                </div>
                    

                    { tutorStatus &&
                    <div class="modules-choice">
                        <p class="label">Module(s) enseigné(s)</p>
                        {this.state.modulesAvailable.map(
                            (module, i) => {
                                return <Checkbox label={module.label}
                                forId={module.name} 
                                name={module.name} 
                                key={i}
                                onChange={onCheckModulesTeached}
                                />
                            }
                        )}
                    </div>
                    } 
                </div>
                
            
                
            <TagsInput
            placeholder="Entrez une matiere"
            name="matieres"
            label="Matière(s) d'apprentissage"
            />

            { tutorStatus &&
                <TagsInput
                placeholder="Entrez une matiere"
                name="matieres"
                label="Matière(s) enseignée(s)"
                
                />
            }
                    
                    
              

            

                <div className="button-container">
                    <ButtonPurple innerText="RETOUR" type="button" onClick={onClickPreviousBtn}/>
                    <ButtonYellow innerText="ETAPE SUIVANTE" type="button" onClick={onClickNextBtn}/>
                </div>
            </div>
        )
    }
}