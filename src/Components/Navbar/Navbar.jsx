import React from 'react'
import VectorLogo from "../../assets/Vector.png"
import Search from "../../assets/search.png"
import Heart from "../../assets/heart.png"
import Shoppingbag from "../../assets/shoppingbag.png"
import Profile from "../../assets/profile.png"
import Arrow from "../../assets/arrow-left.png"
import "./Navbar.css"
const Navbar = () => {
    return (
        <div className='navContainer'>
            <div className='container1'>
                <img src={VectorLogo} alt="Vrctor" style={{height:"36px" ,width:"36px"}}/>
                <div id='logo'>LOGO</div>
                <div className='aboutSection'>
                    <div><img src={Search} alt='Search' /></div>
                    <div><img src={Heart} alt='Heart' /></div>
                    <div><img src={Shoppingbag} alt='Shopingbag' /></div>
                    <div><img src={Profile} alt='Profile' /></div>
                    <div>ENG<img src={Arrow} alt='Arrow-left' /></div>
                </div>
            </div>
            <div className='container2'>
                <span>SHOP</span>
                <span>SKILLS</span>
                <span>STORIES</span>
                <span>ABOUT</span>
                <span>CONTACT US</span>
            </div>
            <div className='line'>

            </div>
        </div>
    )
}

export default Navbar
