import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCards";
import Particle from "../components/Particle";
import chatify from ".././Assets/Projects/stremify.png";
import emotion from ".././Assets/Projects/emotion.png";
import zerodha from ".././Assets/Projects/zerodhaApplication.png";
import vedio from ".././Assets/Projects/vedio-calling.png";
import suicide from ".././Assets/Projects/suicide.png";
import InvoiceAIGenerator from ".././Assets/Projects/InvoiceAI.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vedio}
              isBlog={false}
              title="vedio-calling"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js, Material-UI, and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/roshani9324/vedio_calling_app"
              demoLink="https://vedio-calling-app-pied.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={InvoiceAIGenerator}
              isBlog={false}
              title="InvoiceAI – AI-Powered Invoice Generator"
              description="AI-powered invoice management application that extracts invoice details from text using AI, stores invoices securely, and provides an intuitive dashboard for managing invoice records. "
              ghLink="https://github.com/roshani9324/Invoice-AI"
              demoLink="https://invoice-ai-xi-two.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={zerodha}
              isBlog={false}
              title="Zerodha clone"
              description="Full-stack Zerodha clone with React, Express, Node.js, and MongoDB featuring a trading dashboard, holdings, positions, and responsive UI."
              ghLink="https://github.com/roshani9324/zerodha-application-"
              demoLink="https://zerodha-application-wqdw-five.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Streamify — Real-Time Video Calling Platform"
              description="Full-stack video calling and messaging platform built with the MERN 
stack, featuring JWT-based authentication, real-time chat via Stream 
Chat SDK, and WebRTC video calls. Implemented secure cross-origin 
session handling, friend request system, and language-exchange 
matchmaking. Deployed with separate frontend (Vercel) and backend 
(Render) hosting, resolving production-specific challenges around 
CORS and cross-domain cookie authentication."
              ghLink="https://github.com/roshani9324/stremify-Application"
              demoLink="https://stremify-application.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              //demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
