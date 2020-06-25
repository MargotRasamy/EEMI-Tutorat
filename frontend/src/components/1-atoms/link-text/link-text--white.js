import React from 'react';
import './link-text.scss';

const LinkTextWhite = (props) => {
    return (
        <a class="a-link-text a-link-text--white" href="#">
            {props.innerText}
        </a>
    );
};

export default LinkTextWhite;