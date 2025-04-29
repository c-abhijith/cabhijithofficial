import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__content">
                    <div className="footer__social">
                        <div className="footer__social-links">
                            <a 
                                href="https://github.com/c-abhijith" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="footer__social-link"
                            >
                                <i className="uil uil-github"></i>
                            </a>
                            <a 
                                href="https://www.linkedin.com/in/cabhijithofficial/" 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="footer__social-link"
                            >
                                <i className="uil uil-linkedin"></i>
                            </a>
                            <a 
                                href="mailto:cabhijithofficial@gmail.com" 
                                className="footer__social-link"
                            >
                                <i className="uil uil-envelope"></i>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer__copy">
                    <p>© 2025 Abhijith C. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
