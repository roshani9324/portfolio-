import React from "react";
import { Col, Row } from "react-bootstrap";
import chrome from "../../Assets/TechIcons/Google Chrome.svg";
import vsCode from "../../Assets/TechIcons/vscode.svg";
import {
  
  SiGithub,
  SiGitlab,

  SiDocker,
  SiGithubactions,
  SiJenkins,

  SiJupyter,
  SiMongodb,
  SiMysql,
} from "react-icons/si";
function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      <Col xs={4} md={2} className="tech-icons ">
        <img src={chrome} alt="Chrome" className="tech-icon-images" />
        <div className="tech-icons-text">Google Chrome</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons ">
        <img src={vsCode} alt="vsCode" className="tech-icon-images" />
        <div className="tech-icons-text">Vs Code</div>
      </Col>

      
    
     

      {/* GitHub */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
        <div className="tech-icons-text">GitHub</div>
      </Col>

      {/* GitLab */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGitlab />
        <div className="tech-icons-text">GitLab</div>
      </Col>

    
    

      {/* Docker */}
      <Col xs={4} md={2} className="tech-icons">
        <SiDocker />
        <div className="tech-icons-text">Docker</div>
      </Col>

      {/* GitHub Actions */}
      <Col xs={4} md={2} className="tech-icons">
        <SiGithubactions />
        <div className="tech-icons-text">GitHub Actions</div>
      </Col>

      {/* Jenkins */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJenkins />
        <div className="tech-icons-text">Jenkins</div>
      </Col>

      {/* AWS */}
      

      {/* Jupyter Notebook */}
      <Col xs={4} md={2} className="tech-icons">
        <SiJupyter />
        <div className="tech-icons-text">Jupyter</div>
      </Col>

      {/* MongoDB Compass */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMongodb />
        <div className="tech-icons-text">MongoDB Compass</div>
      </Col>

      {/* MySQL Workbench */}
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
        <div className="tech-icons-text">MySQL Workbench</div>
      </Col>
    </Row>
  );
}

export default Toolstack;
