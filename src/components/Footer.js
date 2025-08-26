import React from 'react';
import { FaEnvelope, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section footer-contact">
                    <div className="footer-socials">
                        <FaEnvelope className="social-icon" />
                        <FaXTwitter className="social-icon" />
                        <FaLinkedinIn className="social-icon" />
                    </div>
                    <div className="footer-copyright">
                        <p>© All Rights Reserved by ABCDEFG Private Limited</p>
                        <p>Subsidiary of ABCDE</p>
                    </div>
                </div>

                <div className="footer-section footer-links">
                    <h4>Useful links</h4>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Marketplace</a></li>
                        <li><a href="#">Resources</a></li>
                    </ul>
                </div>

                <div className="footer-section footer-touch">
                    <h4>Get In Touch</h4>
                    <p className="footer-description">
                        This has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                    </p>
                    <button className="contact-button">
                        Contact Now
                    </button>
                </div>
            </div>
            <div className="footer-policy">
                <p>Privacy policy</p>
            </div>
        </footer>
    );
};

export default Footer;