import React from 'react';
import Input from '../../2-molecules/input/input.js';
import './tags-input.scss';

const TagsInput = ({label, placeholder, name}) => {
    const tagsEntered = ['PHP', 'Swift', 'UI']
    return (
        <div className="tags-input">
            <label for={name}>{label}</label>

            <div class="tags-input-container">
               
             
                        {tagsEntered.map(
                            (tag, i) => 
                                <div key={i} className="tag">
                                    <span>{tag}</span>
                                    <span className="tag-delete"> &#10005;</span>
                                </div>
                            
                        )}
                        <input type="text" id={name} name={name} placeholder={placeholder}/>
                 

                    
                    
                    
                

           
                
                
           </div>
        </div>
    );
};

export default TagsInput;