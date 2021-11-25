import React,{useState} from 'react'
import './navbar.css'
import {RiMenu3Line, RiCloseLine} from 'react-icons/ri';
import logo from '../../assets/logo.jpg';

const Menu = () =>(
    <>
    <p><a href="#home">Home</a></p>
    <p><a href="#gpt3">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case studies</a></p>
    <p><a href="#blog">Library</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu]=useState(false);
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu/>
                </div>
            </div>
            <div className="gpt3__navbar-sign">
                <p>sign in</p>
               <button type="button">Sign up</button>
            </div>
            <div className="gpt3__navbar-menu">
                {toggleMenu
                ? <RiCloseLine color="#fff" size={27} onClick={()=>setToggleMenu(false)}/>
                : <RiMenu3Line color="#fff" size={27} onClick={()=>setToggleMenu(true)}/>
                }
                {toggleMenu && (
                    <div className="scale-up-center">
                        <div className="gpt3__navbar-menu_containeer_links">
                        <div className="gpt3__navbar-menu_container-links-sign">
                            <Menu/>
                                <p>sign in</p>
                                <button type="button">Sign up</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
