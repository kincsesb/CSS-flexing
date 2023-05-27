import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin, faCodepen } from "@fortawesome/free-brands-svg-icons";
import profileImage from "../images/profile.png";

function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="introduce">
        <h1 className="about-heading" id="hi-i-am">Hi! I am</h1>
        <h2 className="about-heading yellow">Bence Kincses</h2>
        <h1 className="about-heading" id="test-automation-engineer">Test Automation Engineer</h1>
        </div>
        <div className="about-content">
          <div className="about-image">
            <img src={profileImage} alt="Profile" />
          </div>
          <div className="about-text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla a arcu eu nisi consectetur commodo.
              Sed eu dignissim neque. Vivamus lacinia ipsum non orci efficitur posuere. Sed convallis sem eu erat iaculis lacinia.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum elementum, lorem vitae lobortis eleifend,
              mauris elit luctus sem, a malesuada lectus turpis sed lectus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Vestibulum elementum, lorem vitae lobortis eleifend, mauris elit luctus sem, a malesuada lectus turpis sed lectus.
            </p>
            <div className="line-1"></div>
            <div className="icons">
              <a href="https://www.facebook.com/bence.kincses/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faFacebook} className="icon" />
              </a>
              <a href="https://www.linkedin.com/in/bence-kincses-marks4a3/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} className="icon" />
              </a>
              <a href="https://www.codewars.com/users/kincsesb" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faCodepen} className="icon" />
              </a>
            </div>
          </div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </div>
    </section>
  );
}

export default About;
