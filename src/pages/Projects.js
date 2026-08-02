import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "../components/Projects/ProjectCards";
import Particle from "../components/Particle";
import chatify from ".././Assets/Projects/stremify.png";
import emotion from ".././Assets/Projects/currencey_convter.png";
import zerodha from ".././Assets/Projects/zerodhaApplication.png";
import vedio from ".././Assets/Projects/vedio-calling.png";
import virtual from ".././Assets/Projects/Virtual.png";
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
              imgPath={virtual}
              isBlog={false}
              title="AI Virtual Voice Assistant"
              description="A voice-controlled AI assistant built with the MERN stack and Google Gemini API. Users can customize their assistant's name and appearance, then interact with it through natural voice commands to search the web, get real-time info, and perform quick actions.
              What it does: Voice input & output — talks and listens like JARVIS  Understands natural language commands via Gemini AI  Secure authentication with JWT + bcrypt Customizable assistant — pick your own name and image  Can search Google/YouTube, open apps, tell time/date/weather — all through voice Fully responsive, deployed and live
"
              ghLink="https://github.com/roshani9324/Ai-Virtual-Assistant"
              demoLink="https://ai-virtual-assistant-smoky.vercel.app/signup"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Currency Exchange Rate Converter — React"
              description="Built a responsive currency converter that fetches live exchange rates and lets users convert amounts between any two currencies in real time. The app includes a custom React hook that handles fetching and caching exchange rate data based on the selected base currency, keeping the UI logic clean and reusable.The interface features a reusable InputBox component for entering amounts and selecting currencies, along with a one-click swap button that instantly flips the  currencies without needing a page refresh. The design uses a full-screen background image with a frosted-glass card layout for a modern look, styled entirely with Tailwind CSS."
              ghLink="https://github.com/roshani9324/Currency-Exchange-Rates-Converter"
              demoLink="https://roshani9324.github.io/Currency-Exchange-Rates-Converter/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
