import React, { useState, useEffect } from 'react';
import "./Header.css";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [prevScrollPos, setPrevScrollPos] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setIsVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
            setPrevScrollPos(currentScrollPos);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos]);

    const handleResumeClick = () => {
        const resumeUrl = '/resume.pdf';
        window.open(resumeUrl, '_blank');
    };

    return (
        <header className={`header ${!isVisible ? 'hide' : ''}`}>
            <nav className='nav container'>
                <div className="nav__resume">
                    <button onClick={handleResumeClick} className="resume__link">
                        Resume
                    </button>
                </div>
            </nav>
        </header>
    );
}
