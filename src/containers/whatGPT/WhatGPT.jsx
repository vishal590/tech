import React from 'react';
import './whatGPT.css';
import Feature from '../../components/feature/Feature';

const WhatGPT = () => {
    return (
        <div className="gpt3__whatgpt3 section__margin" id="gpt3">
            <div className="gpt3__whatgpt3-feature">
                <Feature title="Lorem ipsum content" text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
optio, eaque rerum! Provident similique accusantium nemo autem. Veritatis
obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam
nihil, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit,
tenetur error, harum nesciunt ipsum debitis quas aliquid. Reprehenderit,
quia. Quo neque error repudiandae fuga? "/>
            </div>
            <div className="gpt3__whatgpt3-heading">
                <h1 className="gradient__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                <p>Explore The Library</p>
            </div>
            <div className="gpt3__whatgpt3-container">
                <Feature title="Lorem ipsum" text="Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt
                                                    ut labore et dolore magna aliqua."/>
                <Feature title="Lorem ipsum" text="dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt
                                                    ut labore et dolore magna aliqua."/>
                <Feature title="Lorem ipsum" text="Lorem ipsum dolor sit amet,
                                                    consectetur adipiscing elit,
                                                    sed do eiusmod tempor incididunt
                                                    ut labore et dolore magna aliqua."/>
            </div>
        </div>
    )
}

export default WhatGPT
