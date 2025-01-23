import React, { useEffect, useRef } from 'react';
import './About.css';

export default function About() {
    const sphereRef = useRef(null);
    const cloudInstanceRef = useRef(null);

    useEffect(() => {
        const initTagCloud = async () => {
            try {
                const TagCloud = (await import('TagCloud')).default;
                
                const texts = [
                    'Python', 'Django','FastAPI', 'Flask',
                    'gRPC','PostgreSQL','MySQL','MongoDB',
                    'GitHub', 'AWS','REST API',
                    'Redis', 'Celery','RabbitMQ'
                ];

                const getRadius = () => {
                    const width = window.innerWidth;
                    if (width <= 340) return 90;
                    if (width <= 465) return 150;
                    if (width <= 768) return 180;
                    return 230;
                };

                const speedMapping = {
                    'slow': 1,
                    'medium': 5,
                    'fast': 20
                };
                
                const options = {
                    radius: getRadius(),
                    maxSpeed: speedMapping['fast'],   
                    initSpeed: speedMapping['medium'],
                    direction: 135,
                    keep: true
                };
                

                if (cloudInstanceRef.current) {
                    try {
                        cloudInstanceRef.current.destroy();
                    } catch (error) {
                        console.log('Previous instance cleanup skipped');
                    }
                }

                if (sphereRef.current) {
                    sphereRef.current.innerHTML = '';
                }

                cloudInstanceRef.current = TagCloud('.tagcloud', texts, options);

                let resizeTimeout;
                const handleResize = () => {
                    clearTimeout(resizeTimeout);
                    resizeTimeout = setTimeout(() => {
                        const newRadius = getRadius();
                        
                        if (cloudInstanceRef.current) {
                            try {
                                cloudInstanceRef.current.destroy();
                                cloudInstanceRef.current = TagCloud('.tagcloud', texts, {
                                    ...options,
                                    radius: newRadius
                                });
                            } catch (error) {
                                console.log('Resize handling skipped');
                            }
                        }
                    }, 150);
                };

                window.addEventListener('resize', handleResize);

                return () => {
                    window.removeEventListener('resize', handleResize);
                    clearTimeout(resizeTimeout);
                    if (cloudInstanceRef.current) {
                        try {
                            cloudInstanceRef.current.destroy();
                            cloudInstanceRef.current = null;
                        } catch (error) {
                            console.log('Final cleanup skipped');
                        }
                    }
                };
            } catch (error) {
                console.error("Error initializing TagCloud:", error);
            }
        };

        initTagCloud();
    }, []);

    return (
        <section className="about">
            <h2 className="section__title">About Me</h2>
            <span className="section__subtitle">Introduction</span>
            
            <div className="about__container">
                <div className="letter-container">
                    <div className="letter">
                        <p className="letter__greeting">Dear Visitor,</p>
                        
                        <p className="letter__content">
                        I'm Abhijith, a passionate software developer with a focus on 
                        creating innovative solutions.My journey in technology began with 
                        curiosity and has evolved into expertise in modern development practices.
                        </p>
                        
                        <p className="letter__content">
                        With  <strong> 2+ years </strong> of experience, I've specialized in building scalable and efficient 
                        backend solutions. My work involves a deep understanding of  <strong>microservices</strong>, 
                        <strong>monolithic</strong> architectures,  <strong>WebSocket </strong> communication, and pub-sub systems,
                        enabling impactful software development.
                        </p>
                        
                        <p className="letter__content">
                            I believe in continuous learning and staying updated with the latest 
                            technologies. When I'm not coding, you'll find me exploring new tech 
                            stacks and contributing to the developer community.
                        </p>
                        
                        <p className="letter__signature">
                            Best regards,<br/>
                            Abhijith C
                        </p>
                    </div>
                </div>

                <div className="sphere-container">
                    <span ref={sphereRef} className="tagcloud"></span>
                </div>
            </div>
        </section>
    );
} 