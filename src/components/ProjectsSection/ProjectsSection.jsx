import "./Style.css";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import colorSharp2 from "../../assets/img/color-sharp2.png";
import { ProjectMocks } from "./ProjectMocks";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const ProjectsSection = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
          <TrackVisibility>
            {({isVisible}) => 
              <div className={isVisible ? "animate__animated animate__bounce animate__delay-2s" : ""}>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
              temporibus vel, magni, asperiores commodi natus, odit aliquid
              voluptatum minus expedita laboriosam rerum deserunt iure tenetur
              inventore. Enim tempora laudantium adipisci!
            </p>
            </div>}
            </TrackVisibility>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab one</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {ProjectMocks.map((projects, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={projects.title}
                          description={projects.description}
                          imageUrl={projects.imgUrl}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">lorem ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">lorem ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}/>
    </section>
  );
};
