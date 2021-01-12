import React from 'react';
import FadeIn from 'react-fade-in';


const BoxDisplay = (props) => {
    const { color } = props;
    return (
        <FadeIn className="fading" transitionDuration="1500">
            <div className="box-new" style={{ backgroundColor: color, display: "inline-block", width: 100, height: 100, marginRight: 10, marginTop: 20, borderRadius: 8 }}></div>
        </FadeIn>
    )
};

export default BoxDisplay;