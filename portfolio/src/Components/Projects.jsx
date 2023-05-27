import React from "react";

import ArrowDown from "./ArrowDown";

function NavigateTo(url) {
    window.open(url)
}

function Projects() {
    return (
        <section id="projects">
            <div className="container">
                <h1>LET ME</h1>
                <h2>SHOW MY PROJECTS</h2>
                <div className="project-container">
                    <div className="project" id="figting_game" onClick={() => NavigateTo("https://github.com/kincsesb/Fighting-Game")}>
                        <h3>Fighting Game</h3>
                    </div>
                    <div className="line-7"></div>
                    <div className="project" id="stable_managment_system" onClick={() => NavigateTo("https://github.com/kincsesb/menes_kezelo")}>
                        <h3>Stable Management System</h3>
                    </div>
                    <div className="line-8"></div>
                    <div className="project" id="jira_test" onClick={() => NavigateTo("https://github.com/kincsesb/JIRA_automation_v.2")}>
                        <h3>Automation Test For Jira</h3>
                    </div>
                </div>
            </div>
            <ArrowDown/>
        </section>
    );
};

export default Projects;