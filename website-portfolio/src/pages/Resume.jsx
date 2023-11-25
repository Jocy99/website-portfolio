import React from "react";
import resume from "../assets/JocelynBenitez_FullStackDeveloper_Resume.pdf";

const Resume = () => {
  return (
    <div className="resume">
      <h2> Resume </h2>
      <h6> Click the link below to download my resume! </h6>
      <br></br>
      <a href={ resume } download { ... resume }> Download my Resume! </a>
      <br></br>
      <br></br>
      <br></br>

      <h5>Front-End:</h5>
      <ul>
        <li>JavaScript</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>React</li>
        <li>Responsive Web Design</li>
      </ul>

      <h5>Back-End:</h5>
      <ul>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>Express.js</li>
        <li>MongoDB</li>
        <li>MySQL</li>
      </ul>
    </div>
  );
};

export default Resume;
