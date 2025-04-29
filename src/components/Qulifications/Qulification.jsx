import React, { useState } from 'react';
import "./Qulification.css";

export default function Qualification() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };

    return (
        <section className="qualification section" id="qualification">
            <h2 className="section__title">Journey</h2>
            <span className="section__subtitle">Advancement in Tech</span>

            <div className="qualification__container">
                <div className="qualification__tabs">
                    <button 
                        className={`tab__button ${toggleState === 1 ? 'active-tab' : ''}`}
                        onClick={() => toggleTab(1)}
                    >
                        <i className="uil uil-graduation-cap"></i>
                        Education
                    </button>

                    <button 
                        className={`tab__button ${toggleState === 2 ? 'active-tab' : ''}`}
                        onClick={() => toggleTab(2)}
                    >
                        <i className="uil uil-briefcase-alt"></i>
                        Experience
                    </button>
                </div>

                <div className="qualification__sections">
                    {/* Education Section */}
                    <div className={`qualification__content ${toggleState === 1 ? 'active-content' : ''}`}>
                        <div className="timeline">
                            {/* <div className="timeline__item left">
                                <div className="timeline__content">
                                    <div className="timeline__period">2024 - Present</div>
                                    <div className="timeline__marker"></div>
                                    <h3>MCA</h3>
                                    <p>JAIN (Kochi)</p>
                                </div>
                            </div> */}

                            <div className="timeline__item right">
                                <div className="timeline__content">
                                    <div className="timeline__period">2017 - 2020</div>
                                    <div className="timeline__marker"></div>
                                    <h3>BCA</h3>
                                    <p>University of Kerala</p>
                                </div>
                            </div>

                            <div className="timeline__item left">
                                <div className="timeline__content">
                                    <div className="timeline__period">2015 - 2017</div>
                                    <div className="timeline__marker"></div>
                                    <h3>Computer Science</h3>
                                    <p>KPMHSS</p>
                                </div>
                            </div>

                            <div className="timeline__item right">
                                <div className="timeline__content">
                                    <div className="timeline__period">2015</div>
                                    <div className="timeline__marker"></div>
                                    <h3>SSLC</h3>
                                    <p>GHS Pooyappally</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Experience Section */}
                    <div className={`qualification__content ${toggleState === 2 ? 'active-content' : ''}`}>
                        <div className="timeline">
                            <div className="timeline__item left">
                                <div className="timeline__content">
                                    <div className="timeline__period">2022 - 2023</div>
                                    <div className="timeline__marker"></div>
                                    <h3>Jr Software Developer</h3>
                                    <p>Syoft</p>
                                </div>
                            </div>

                            <div className="timeline__item right">
                                <div className="timeline__content">
                                    <div className="timeline__period">2021 - 2022</div>
                                    <div className="timeline__marker"></div>
                                    <h3>Software Developer</h3>
                                    <p>CYBERIA (TVM)</p>
                                </div>
                            </div>

                            <div className="timeline__item left">
                                <div className="timeline__content">
                                    <div className="timeline__period">2020 - 2021</div>
                                    <div className="timeline__marker"></div>
                                    <h3>Intern</h3>
                                    <p>CYBERIA (TVM)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
