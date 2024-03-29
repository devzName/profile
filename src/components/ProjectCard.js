import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={12} md={6}>
        <div className="proj-imgbx">
            <img src={imgUrl} alt=""/>
            <div className="proj-txtx">
                <h4>{title}</h4>
                <span>{description}</span>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard
