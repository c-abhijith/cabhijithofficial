import React from 'react';
import { Frontend } from './Frontend';
import { Backend } from './Backend';
import "./Skills.css";
import { Message } from './Message';
import { Cloud } from './Cloud';

export default function Skills() {
  return (
    <section className="skills" id="skills">
       <h2 className="section__title">Skills</h2>
       <span className="section__subtitle">My technical level</span>
       <div className="skills__container container grid">
        <Frontend/>
        <Backend/>
        <Message/>
        <Cloud/>
       </div>
    </section>
  );
}
