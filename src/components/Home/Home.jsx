import React from 'react';
import "./Home.css";
import Data from './Data';

export default function Home() {
  

  return (
    <section className="home" id="home">
      <div className="solar-system">
        <div className="sun"></div>
        <div className="orbit mercury-orbit">
          <div className="planet mercury"></div>
        </div>
        <div className="orbit venus-orbit">
          <div className="planet venus"></div>
        </div>
        <div className="orbit earth-orbit">
          <div className="planet earth">
            <div className="moon-orbit">
              <div className="moon"></div>
            </div>
          </div>
        </div>
        <div className="orbit mars-orbit">
          <div className="planet mars"></div>
        </div>
      </div>

      <div className="home__container">
        <div className="home__content">
          <Data />
        </div>
      </div>
    </section>
  );
}
