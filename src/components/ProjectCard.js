import PropTypes from 'prop-types';
import { Col } from 'react-bootstrap';

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={title || "Project image"} loading="lazy" />
        <div className="proj-txtx">
          <h4>{title || "Untitled Project"}</h4>
          <span>{description || "No description available."}</span>
        </div>
      </div>
    </Col>
  );
};

// Prop type validation
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
};

// Default props
ProjectCard.defaultProps = {
  title: "Untitled Project",
  description: "No description available.",
  imgUrl: "",
};
