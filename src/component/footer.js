import React from 'react'
import './footer.css'
import email from '../assets/email.svg'
import phone from '../assets/phone.svg'
import logo from '../assets/logo.svg'
import twitter from '../assets/twitter.svg'
import Instagram from '../assets/Instagram.svg'
import YouTube from '../assets/YouTube.svg'


function Footer() {
    return (
        <footer className='footer'>
            <div className='socials'>
            <div className='email'>
                    <div className='scl-logo'>
                        <img src={email} width={50} alt="Email"/>
                    </div>
                    <div className='scl-data'>
                    info@youremail.com
                    </div>
                </div>
                <div className='phone'>
                <div className='scl-logo'>
                        <img src={phone} width={50} alt="Phone"/>
                    </div>
                    <div className='scl-data'>
                    +880 321 655 9985
                    </div>
                </div>
            </div>
            <div className='mid-footer'>
                <div className='logo'>
                    <img src={logo} alt="logo" width={100}></img>
                    <div>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Viverra nunc ante velit vitae.
                    </div>
                </div>

                <div className='quick'>
                    <h3 className='h3-title'>
                        QUICK LINK
                    </h3>
                    <ul className='links'>
                        <a href="#home">
                            <li>About Us</li>
                        </a>
                        <a href="#home">
                            <li>Contact Us</li>
                        </a>

                        <a href="#home">
                            <li>Privacy Policy</li>
                        </a>
                        <a href="#home">
                            <li>Blog</li>
                        </a>
                        <a href="#home">
                            <li>Terms & Conditions</li>
                        </a>

                        <a href="#home">
                            <li>Sitemap</li>
                        </a>
                        <a href="#home">
                            <li>Partner Program</li>
                        </a>

                        <a href="#home">
                            <li>FAQ</li>
                        </a>
                    </ul>

                </div>

                <div className='connect'>
                <h3 className='h3-title'>
                        CONNECT WITH US
                    </h3>
                    <div className='icons'>
                        <img src={twitter} alt="twitter" width={30}></img>
                        <img src={Instagram} alt="insta" width={30}></img>
                        <img src={YouTube} alt="youtube" width={30}></img>
                    </div>
                </div>
            </div>
            <div className='cpyRight'>
                &copy; Copyright 2023 .Esparse Matrix Solutions . All Right Reserved.
            </div>
        </footer>
    )
}

export default Footer