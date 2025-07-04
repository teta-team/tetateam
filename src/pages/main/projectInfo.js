import { useParams, useNavigate, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function ProjectInfo() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://5.57.35.227:5000/api/projects/${id}`)
      .then((response) => {
        setProject(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Project not found:", error);
        navigate("/404");
      });
  }, [id, navigate]);
  if (!project) return null;

  const modes = ["وردپرس", "برنامه نویسی"];

  return (
    <div className="project-info">
      {loading === true ? (
        <div className="load-box">
          <div className="container">
            <div className="loader"></div>
          </div>
        </div>
      ) : (
        <div className="container">
          <div className="right">
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            <h2>ویژگی های سایت</h2>
            <ul>
              {JSON.parse(project.attributes).map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <div className="tags">
              <p>{modes[project.mode]}</p>
              <p>{project.lang_name}</p>
              <Link to={project.domain} target="_blank">
                <i className="bi bi-link"></i>
              </Link>
            </div>
          </div>
          <div className="left">
            <img
              src={`${process.env.PUBLIC_URL}/assets/images/${project.banner}`}
              alt={project.title}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectInfo;
