import { Link } from "react-router-dom";

function ProjectCard({ image, name }) {
  return (
    <Link to="" className="box">
      <img src={image} alt={name} />
      <h3>{name}</h3>
    </Link>
  );
}

export default ProjectCard;
