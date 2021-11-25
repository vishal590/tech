import React from 'react';
import './footer.css';
import logo from '../../assets/logo.jpg';

const Footer = () => {
    return (
        <div className="gpt3__footer section__padding">
            <div className="gpt3__footer-heading">
                <h1>Lorem ipsum dolor sit amet consectetur</h1>
            </div>

            <div className="gpt3__footer-btn">
                <p>Early access</p>
            </div>

            <div className="gpt3__footer-links">
                <div className="gpt3__footer-links_logo">
                    <img src={logo} alt="logo" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia</p>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Links</h4>
                    <ul>
                        <li>Contact</li>
                        <li>Social Media</li>
                        <li>Counters</li>
                    </ul>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Company</h4>
                    <ul>
                        <li>Privacy Policy</li>
                        <li>Terms & conditions</li>
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="gpt3__footer-links_div">
                    <h4>Get in touch</h4>
                    <ul>
                        <li>Contact</li>
                        <li>Privacy Policy</li>
                        <li>Terms & conditions</li>
                    </ul>
                </div>
            </div>

            <div className="gpt3__footer-copyright">
                <p>All Rights Reserved</p>
            </div>

        </div>
    )
}

export default Footer
