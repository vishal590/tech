import React from 'react';
import Feature from '../../components/feature/Feature';
import './features.css';

const featuresData=[
    {
        title: 'Lorem ipsum dolor sit amet ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia'
    },
    {
        title: 'Lorem ipsum dolor sit amet ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia'
    },
    {
        title: 'Lorem ipsum dolor sit amet ',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia'
    }
]

const Features = () => {
    return (
        <div className="gpt3__features section__padding" id="features">
            <div className="gpt3__features-heading">
                <h1 className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia</h1>
                <p className="">Lorem ipsum dolor sit amet consectetur </p>
            </div>
            <div className="gpt3__features-container">
                {featuresData.map((item,index)=>(
                    <Feature title={item.title} text={item.text} key={item.title + index}/>
                ))} 
                {/* ???????????????? */}
            </div>
        </div>
    )
}

export default Features
