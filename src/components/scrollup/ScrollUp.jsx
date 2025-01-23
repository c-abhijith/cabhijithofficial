import React, { useState, useEffect } from 'react';
import './ScrollUp.css';
import resumePDF from '../../assets/Abhijith_Resume.pdf';

const ScrollUp = () => {
    const [showElements, setShowElements] = useState(true);
    const [showScrollUp, setShowScrollUp] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const homeSection = document.getElementById('home');
            const homeSectionBottom = homeSection?.offsetTop + homeSection?.offsetHeight;
            const currentScroll = window.scrollY;

            setShowElements(currentScroll < homeSectionBottom || currentScroll === 0);
            setShowScrollUp(currentScroll >= 560);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleResumeClick = () => {
        const link = document.createElement('a');
        link.href = resumePDF;
        link.download = 'Abhijith_Resume.pdf';
        link.target = '_blank';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <>
            {showElements && (
                <>
                    <div className="resume-container">
                        <button onClick={handleResumeClick} className="resume-link">
                            Resume 
                        </button>
                    </div>

                    <div className="social-links-container">
                        <div className="social-links">
                            <a
                                href="https://www.linkedin.com/in/cabhijithofficial/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link"
                            >
                                <i className="uil uil-linkedin-alt"></i>
                            </a>
                            <a
                                href="https://github.com/c-abhijith"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link"
                            >
                                <i className="uil uil-github"></i>
                            </a>
                            <a
                                href="https://leetcode.com/u/cabhijithofficial/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-icon-link"
                            >
                                <i className="uil uil-code-branch"></i>
                            </a>
                        </div>
                    </div>
                </>
            )}

            {showScrollUp && (
                <a href="#home" className="scrollup">
                    <i className="uil uil-arrow-up scrollup__icon"></i>
                </a>
            )}
        </>
    );
};

export default ScrollUp;
