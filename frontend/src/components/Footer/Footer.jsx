import React from 'react'
import './Footer.css';
import { assets } from '../../assets/assets';

export default function Footer() {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <a href=''><img src={assets.logo} alt="" /></a>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus nobis odio minus modi? Adipisci, aliquid beatae? Unde et illo ducimus, quod impedit culpa, fuga quis dolorum voluptas, blanditiis tempora adipisci!</p>
                    <div className="footer-social-icons">
                        <img src={assets.facebook_icon} alt="" />
                        <img src={assets.twitter_icon} alt="" />
                        <img src={assets.linkedin_icon} alt="" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Quick Links</h2>
                    <ul>
                        <li>Home</li>
                        <li>Contact Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get In Touch</h2>
                    <ul>
                        <li>+91 860-662-6017</li>
                        <li>tijonarithookil@gmail.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className='footer-copyright'>&copy; Copyright 2024 Tomato.com - All Rights Reserved.</p>
        </div>
    )
}
