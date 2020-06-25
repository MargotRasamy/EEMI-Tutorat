import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './link-image.scss';


const LinkImage = (props) => {
    return (
        <NavLink width={props.Width} height={props.Height} className="a-link-image" to={props.To}>
            <img src={props.ImgSrc} alt="image" />
        </NavLink>
    );
};

export default LinkImage;