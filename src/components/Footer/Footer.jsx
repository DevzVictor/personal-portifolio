import "./Style.css";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.png";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import navIcon2 from "../../assets/img/nav-icon2.svg";
import navIcon3 from "../../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/victor-rodrigues-dev/" target="_blank">
                <img src={navIcon1} />
              </a>
              <a href="https://github.com/DevzVictor" target="_blank">
                <img src={navIcon2} />
              </a>
              <a href="https://twitter.com/Vict0r_dev" target="_blank">
                <img src={navIcon3} />
              </a>
            </div>
            <p>
              CopyRight 2022 © - Todos os direitos reservados a Victor Rodrigues{" "}
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
