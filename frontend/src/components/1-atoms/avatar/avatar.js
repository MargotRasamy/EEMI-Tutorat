import React from 'react';
import './avatar.scss';
import LinkImage from '../link-image/link-image';

const Avatar = (props) => {
    return (
            <LinkImage To={props.To} ImgSrc={props.ImgSrc}/>
    );
};

export default Avatar;