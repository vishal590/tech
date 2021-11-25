import React from 'react';
import './brand.css';
import {facebook, whatsapp, instagram, twitter} from './import'

const Brand = () => {
    return (
        <div className="gpt3__brand section__padding">
            <div>
                <img src={facebook} alt="google" />
            </div>
            <div>
                <img src={whatsapp} alt="whatsapp" />
            </div>
            <div>
                <img src={instagram} alt="instagram" />
            </div>
            <div>
                <img src={twitter} alt="twitter" />
            </div>
        </div>
    )
}

export default Brand
