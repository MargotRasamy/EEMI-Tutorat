import React from 'react';
import './caption.scss';

const Caption = (props) => {
    return (
        <div className="m-caption">
            <h6>{props.captionTitle}</h6>
            <p>{props.captionText}</p>
        </div>
    );
};

export default Caption;