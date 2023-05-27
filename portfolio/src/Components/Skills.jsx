import React from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaJava,
  FaNodeJs,
  FaGitAlt
} from "react-icons/fa";
import {
  SiCsharp,
  SiMongodb,
  SiJirasoftware,
  SiSelenium,
  SiCucumber,
  SiPostgresql
} from "react-icons/si";
import DotDesign from "./DotDesing";


function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>MY SKILLS</h2>
        <DotDesign/>
        <div className="skills-list">
          <div className="skill">
            <FaJava className="skill-icon" />
            <span>Java</span>
          </div>
          <div className="skill">
            <FaHtml5 className="skill-icon" />
            <span>HTML</span>
          </div>
          <div className="skill">
            <FaCss3Alt className="skill-icon" />
            <span>CSS</span>
          </div>
          <div className="skill">
            <FaJs className="skill-icon" />
            <span>JavaScript</span>
          </div>
          <div className="skill">
            <FaReact className="skill-icon" />
            <span>React</span>
          </div>
          <div className="skill">
            <SiCsharp className="skill-icon" />
            <span>C#</span>
          </div>
          <div className="skill">
            <FaNodeJs className="skill-icon" />
            <span>Node.js</span>
          </div>
          <div className="skill">
            <SiMongodb className="skill-icon" />
            <span>MongoDB</span>
          </div>
          <div className="skill">
            <SiPostgresql className="skill-icon" />
            <span>PostgreSQL</span>
          </div>
          <div className="skill">
            <SiJirasoftware className="skill-icon" />
            <span>Jira</span>
          </div>
          <div className="skill">
            <FaGitAlt className="skill-icon" />
            <span>Git</span>
          </div>
          <div className="skill">
            <SiSelenium className="skill-icon" />
            <span>Selenium</span>
          </div>
          <div className="skill">
            <SiCucumber className="skill-icon" />
            <span>Cucumber</span>
          </div>
        </div>
      </div>
      <div className="line-6"></div>
    </section>
  );
}

export default Skills;
