import React from 'react';
import Caption from '../../2-molecules/caption/caption';
import './captions-section.scss';

const CaptionsSection = () => {
    return (
        <div className="o-captions-section">
              <Caption 
                captionTitle="Trouver un tuteur ou un élève"
                captionText="Grâce au système de recherche facile, vous trouverez le tuteur ou l'élève qui vous correspond selon le module ou la matière qui vous concerne."/>
            <Caption 
                captionTitle="S'inscrire à des cours sans restriction"
                captionText="Sur Studeemi, vous pouvez participer à tous les cours proposés par les tuteurs sans restriction. Tous les membres peuvent se contacter entre eux et il n'y a pas de tuteur assigné."/>
            <Caption 
                captionTitle="Organiser vos cours"
                captionText="Lorsque vous avez le statut de tuteur activé, vous pouvez planifier des séances de cours individuel ou en groupe facilement en choisissant le nombre de participants et la date."/>
        </div>
    );
};

export default CaptionsSection;