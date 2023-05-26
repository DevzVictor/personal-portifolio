import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imageUrl, link }) => {
  return (
    <Col sm={6} md={4}>
      <a href={link} target="blank">
        <div className="proj-imgbx">
          <img src={imageUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
