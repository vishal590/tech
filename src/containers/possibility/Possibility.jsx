import React from 'react';
import headphone from '../../assets/headphone.png';
import './possibility.css';


const Possibility = () => {
    return (
        <div className="gpt3__possibility section__padding" id="possibility">
            <div className="gpt3__possibility-image">
                <img src={headphone} alt="possibilityImage" />
            </div>
            <div className="gpt3__possibility-content">
                <h4>Lorem ipsum dolor sit amet </h4>
                <h1>Lorem ipsum dolor sit amet consectetur</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia, Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia</p>
                <h4>Lorem ipsum dolor sit amet consectetu.</h4>
            </div>
        </div>
    )
}

export default Possibility
