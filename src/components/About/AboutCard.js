import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Roshani Maurya</span>{" "}
            from <span className="purple">Mumbai, Maharashtra, India.</span>
            <br />I graduated in{" "}
            <span className="purple">
              Artificial Intelligence and Data Science
            </span>{" "}
            from{" "}
            <span className="purple">
              Thakur College of Engineering and Technology (TCET)
            </span>
            .
            <br />I am passionate about building solutions that solve real-world
            problems through technology. My interests include{" "}
            <span className="purple">
              Full Stack Development, DevOps, Artificial Intelligence,
            </span>{" "}
            and <span className="purple">Web Development</span>.
            <br />
            I have worked on projects using React, JavaScript, Node.js, SQL, and
            Data Visualization, and I enjoy learning how different technologies
            come together to create impactful solutions.
            <br />
            Currently, I am exploring Full Stack Development and DevOps while
            continuously improving my software engineering skills.
            I enjoy meeting new people and discussing technology, projects, and
            innovative ideas. Feel free to connect with me!
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Sketching
            </li>
            <li className="about-activity">
              <ImPointRight /> Listen Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Roshani</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
