import "./Style.css";
import { Col, Container, Tab, Row, Nav } from "react-bootstrap";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import { ProjectMocksFront } from "./ProjectMocksFront";
import { ProjectMocksBack } from "./ProjectMocksBack";
import { ProjectMocksPessoais } from "./projectMocksPessoais";

export const ProjectsSection = () => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projetos</h2>
              <p>
                Cada projeto foi uma oportunidade para aplicar minhas
                habilidades e conhecimentos, buscando superar desafios e
                alcançar resultados excepcionais. Estou ansioso para embarcar em
                novas aventuras de projetos empolgantes no futuro!
              </p>
            </div>
            <Tab.Container id="projects-tab" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Corporativos</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Freelas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Pessoais</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {ProjectMocksFront.map((projects, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={projects.title}
                          description={projects.description}
                          imageUrl={projects.imgUrl}
                          link={projects.link}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {ProjectMocksBack.map((projects, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={projects.title}
                          description={projects.description}
                          imageUrl={projects.imgUrl}
                          link={projects.link}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                    {ProjectMocksPessoais.map((projects, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          title={projects.title}
                          description={projects.description}
                          imageUrl={projects.imgUrl}
                          link={projects.link}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
