import { Link } from "react-router-dom";

function ProjectCard({ id, image, name }) {
  return (
    <Link to={`/projects/${id}`} className="box">
      <img src={`${process.env.PUBLIC_URL}/assets/images/${image}`} alt={name} />
      <h3>{name}</h3>
    </Link>
  );
}

export default ProjectCard;
