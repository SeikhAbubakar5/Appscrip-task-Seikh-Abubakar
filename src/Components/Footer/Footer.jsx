import React from 'react';
import "./Footer.css";
import CurrImg from "../../assets/Group.png"
import linkedin from "../../assets/linkedin.png"
import insta from "../../assets/Insta.png"
import gpay from "../../assets/gpay.png"
import mastercard from "../../assets/mastercard.png"
import paypal from "../../assets/paypal.png"
import amex from "../../assets/amex.png"
import applepay from "../../assets/applepay.png"
const Footer = () => {
    return (
        <div className='footerContainer'>
            <div className='footerUp'>
                <div className='subscribeSection'>
                    <h3>BE THE FIRST TO KNOW</h3>
                    <p>Sign up for updates from mettā muse.</p>
                    <span className='subscribeForm'>
                        <input type='email' placeholder='Enter your email' />
                        <button>SUBSCRIBE</button>
                    </span>
                </div>

                <div className='contactSection'>
                    <h2>CONTACT US</h2>
                    <p>+44 221 133 5360</p>
                    <p style={{ fontSize: '16px', fontWeight: "400", lineHeight: "19.2px" }}>customercare@mettamuse.com</p>
                    <h4>CURRENCY</h4>

                    <span className='currencies'><img src={CurrImg} alt="currency-icon" />USD</span>

                    <p>Transactions will be completed in Euros, and a currency reference is available on hover.</p>
                </div>
            </div>

            <div className='footerLine'></div>

            <div className='footerDown'>
                <div className='subFooter'>
                <div className='aboutus'>
                    <h2>mettā muse</h2>
                    <p>About Us</p>
                    <p>Stories</p>
                    <p>Artisans</p>
                    <p>Boutiques</p>
                    <p>Contact Us</p>
                    <p>Compliances</p>
                </div>
                <div className='quicklinks'>
                <   h2>QUICK LINKS</h2>
                    <p>Orders & Shipping</p>
                    <p>Join/Login as a Seller</p>
                    <p>Payment & Pricing</p>
                    <p>Return & Refunds</p>
                    <p>FAQs</p>
                    <p>Privacy Policy</p>
                    <p>Terms & Conditions</p>
                </div>
                </div>
                <div className='payment'>
                    <h2>FOLLOW US</h2>
                    <div className='social'>
                        <img src={insta} alt='insta logo'/>
                        <img src={linkedin} alt='linkedin'/>
                    </div>
                    <h3>mettā muse ACCEPTS</h3>
                    <div className='payCards'>
                        <img src={gpay} alt='gapy'/>
                        <img src={mastercard} alt='mastercard'/>
                        <img src={paypal} alt='paypal'/>
                        <img src={amex} alt='amex'/>
                        <img src={applepay} alt='applepay'/>
                        <img src={gpay} alt='gapy'/>
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
