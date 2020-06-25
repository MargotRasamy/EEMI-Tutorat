import React from 'react';
import './caption.scss';

const Caption = (props) => {
    return (
        <div className="m-caption">
            <h5>{props.captionTitle}</h5>
            <p>{props.captionText}</p>
        </div>
    );
};

export default Caption;