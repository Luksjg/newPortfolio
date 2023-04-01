import colorSharp2 from "../assets/img/color-sharp2.png";
import { Container, Row, Col, Tab, Nav, Button, Image } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import chat_app from "./../assets/p_img/chat_app.png"
import ig_p_c from "./../assets/p_img/ig_p_c.png"
import PF from "./../assets/p_img/PF.png"
import PI from "./../assets/p_img/PI.png"
import portafolio from "./../assets/p_img/portafolio.png"
import reciclaje_app from "./../assets/p_img/reciclaje_app.png"
import ToDo_RN from "./../assets/p_img/ToDo_RN.png"
import uno from "./../assets/p_img/1.png"
import dos from "./../assets/p_img/2.png"
import vap_1 from "./../assets/p_img/vap_3.gif"
import redes from "./../assets/p_img/redes.png"
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { useState } from "react";

export const Projects = () => {

  const projects = [
    {
      title: "Chat app",
      description: "App with login, real-time chat, notifications, groups and more details",
      imgUrl: chat_app,
    },
    {
      title: "Grow shop eCommerce",
      description: "Functional ecommerce with a cannabis theme, it has a shopping cart, Mercado pago, register and login with firebase, a relational database that saves user purchases and an administrator panel.",
      imgUrl: PF,
    },
    {
      title: "Countries app",
      description: "application with a rest api with country information, filters by territorial information and relational database with activity proposals by country",
      imgUrl: PI,
    },
    {
      title: "Recycling app",
      description: "App for stock control and routing of products in the recycling chain",
      imgUrl: reciclaje_app,
    },
    {
      title: "This portfolio",
      description: "It is a small project that has just started but I hope to be able to expand with my skills over time",
      imgUrl: portafolio,
    },
    {
      title: "IG Challenger",
      description: "Instagram post component created for an interview test, using HTML, JS, CSS and swiperJS.",
      imgUrl: ig_p_c,
    },
    {
      title: "To do app",
      description: "native application for android and ios, storing and modifying tasks in database",
      imgUrl: ToDo_RN,
    },
  ];
  const [imageSrc, setImageSrc] = useState(uno);

  const handleImageToggle = () => {
    if (imageSrc === uno) {
      setImageSrc(dos);
    } else {
      setImageSrc(uno);
    }
  }

  function handleButtonClick() {
    window.open('https://www.mediafire.com/file/thvpyp5dy26ekc2/LJG_CV.pdf/file', '_blank');
  }

  function toLinkedin() {
    window.open('https://www.linkedin.com/in/lucas-j-gomez/', '_blank');
  }

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Me</h2>
                  <p>I am passionate about the world of programming and I am always looking for new challenges to continue improving my professional profile. If you are looking for a programmer capable of working in a team, with an innovative mentality and constantly learning, do not hesitate to contact me. I am sure that we can collaborate on interesting projects and grow our skills together.</p>
                  <p>Some of these projects are presented with video on my linkedin</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">cv</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">talk with me</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>click on the image to continue reading</p>
                        <div onClick={handleImageToggle} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <img src={imageSrc} alt="Image" style={{ width: '70%', marginTop: "20px" }} />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                          <Button style={{ backgroundColor: 'purple', color: 'white', borderColor: "grey", padding: "10px", position: "relative", marginTop: "20px" }} onClick={handleButtonClick}>Download CV</Button>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <div>
                          <p>I am currently available for new interesting projects</p>
                          <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'flex-start',marginBottom:"-50px" }} onClick={toLinkedin}>
                            <img src={vap_1} alt="vap" style={{ maxWidth: "50%", padding: "10px" }} />
                            <img src={redes} alt="vap" style={{ maxWidth: "50%", padding: "10px" }} />
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
