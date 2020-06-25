import React from 'react';
import Link from 'react-router-dom';
import './link-text.scss';

const LinkTextPurple = (props) => {
    return (
        <a class="a-link-text a-link-text--purple" href="#">
            {props.innerText}
        </a>
    );
};

export default LinkTextPurple;