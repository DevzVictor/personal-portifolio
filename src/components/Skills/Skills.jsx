import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import javascript from "../../assets/img/javascript-icon.svg";
import typescript from "../../assets/img/typescript-icon.svg";
import react from "../../assets/img/react-icon.svg";
import nestjs from "../../assets/img/nestjs-icon.svg";
import html from "../../assets/img/html-icon.svg";
import css from "../../assets/img/css-icon.svg";
import java from "../../assets/img/java-icon.svg";
import spring from "../../assets/img/spring-icon.svg";
import "./Style.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col>
          <div className="skill-bx">
            <h2>Skills</h2>
            <p>Hoje, meu foco principal está na construção do backend com Java e SpringBoot, combinado com o desenvolvimento do frontend utilizando React. Essas são habilidades que estou continuamente aprimorando, buscando constantemente melhorar meus resultados e entregar soluções eficientes e inovadoras.</p>
            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                <div className="item">
                    <img src={javascript} alt="" />
                    <h5>Java Script</h5>
                </div>
                <div className="item">
                    <img src={typescript} alt="" />
                    <h5>Type Script</h5>
                </div>
                <div className="item">
                    <img src={react} alt="" />
                    <h5>React</h5>
                </div>
                <div className="item">
                    <img src={nestjs} alt="" />
                    <h5>NestJS</h5>
                </div>
                <div className="item">
                    <img src={html} alt="" />
                    <h5>HTML</h5>
                </div>
                <div className="item">
                    <img src={css} alt="" />
                    <h5>CSS</h5>
                </div>
                <div className="item">
                    <img src={java} alt="" />
                    <h5>Java</h5>
                </div>
                <div className="item">
                    <img src={spring} alt="" />
                    <h5>SpringBoot</h5>
                </div>
            </Carousel>
          </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
