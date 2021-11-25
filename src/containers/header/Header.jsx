import React from 'react'
import apple from '../../assets/apple.jpg'
import './header.css'

const Header = () => {
    return (
        <div className="gpt3__header section__padding" id="home">
          <div className="gpt3__header-content">
            <h1 className="gradient__text">Black Friday comes early</h1>
            <p>Our biggest sale of the year is here. 25% off across the site with code BF25. Simply apply at checkout. Don't miss out.</p>
            <div className="gpt3__header-content__input">
              <input type="email" placeholder="your email address" />
              <button type="button">Get started</button>
            </div>
            
          </div>  
            <div className="gpt3__header-image">
              <img src={apple} alt="apple" />
            </div>
        </div>
    )
}

export default Header
