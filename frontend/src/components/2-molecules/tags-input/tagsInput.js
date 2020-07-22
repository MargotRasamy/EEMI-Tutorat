import React from 'react';
import Input from '../../2-molecules/input/input.js';
import './tags-input.scss';

const TagsInput = ({label, placeholder, name}) => {
    const [tagsEntered, setTags]= React.useState([])
    const onDeleteTag = (indexToRemove) => {
        setTags(
            tagsEntered.filter(
                (_, i) => 
                   i !== indexToRemove 
            )   
        )
    }

    const addTag = (e) => {
        
        if(e.key === "Enter") {
            setTags(
               [...tagsEntered, e.target.value]
            )
            e.target.value = ""
        }
    }
    return (
        <div className="tags-input">
            <label for={name}>{label}</label>

            <div class="tags-input-container">
                {tagsEntered.map(
                    (tag, i) => 
                        <div key={i} className="tag">
                            <span>{tag}</span>
                            <span className="tag-delete" onClick={() => onDeleteTag(i)}> &#10005;</span>
                        </div>
                )}
                <input type="text" id={name} name={name} placeholder={placeholder}
                onKeyUp={(e) => addTag(e)}/>   
           </div>
        </div>
    );
};

export default TagsInput;