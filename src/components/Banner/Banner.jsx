import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../../assets/img/header-img.svg";
import "./Style.css";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = [
    "Full Stack",
    "Inovação",
    "Tecnologia",
  ];
  const [text, setText] = useState("");
  const [index, setIndex] = useState(1);
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updateText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updateText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updateText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updateText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  const isTextEmpty = text === "";
  const renderSpace = isTextEmpty ? <span className="empty-space">&nbsp;</span> : null;

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row>
            <Col xs={12} md={6} xl={7}>
              <div>
                <span className="tagline">Bem vindo ao meu Portfólio</span>
                <h1>{`Hello World !`}</h1>
                <h1>{`Eu sou Victor `}</h1>
                <span className="wrap">
                  {text}
                  {renderSpace}
                </span>
                <p>
                  Curioso por natureza, sempre me interessei em entender os
                  porquês das coisas e buscar maneiras de torná-las melhores.
                  Desde sempre, minha missão tem sido utilizar a tecnologia para
                  fazer do mundo um lugar melhor. Acredito no poder
                  transformador da tecnologia e em seu potencial para gerar
                  impacto positivo. Busco constantemente maneiras de aplicar
                  meus conhecimentos e habilidades em prol dessa missão,
                  buscando soluções inovadoras e sustentáveis. Com a convicção
                  de que a tecnologia pode impulsionar mudanças significativas,
                  estou determinado a contribuir para um futuro mais promissor e
                  inclusivo através do meu trabalho.
                </p>
                <HashLink to="#connect">
                  <button onClick={() => console.log("Connect")}>
                    Vamos nos conectar!
                    <ArrowRightCircle size={25} />
                  </button>
                </HashLink>
              </div>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <div>
                <img src={headerImg} alt="Header Img" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  );
};
