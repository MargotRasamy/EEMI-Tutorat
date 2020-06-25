import React from 'react';
import './link-text.scss';

const LinkTextYellow = (props) => {
    return (
        <a class="a-link-text a-link-text--yellow" href="#">
            {props.innerText}
        </a>
    );
};

export default LinkTextYellow;