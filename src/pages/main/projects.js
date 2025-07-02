import { useEffect, useState } from "react";
import ProjectCard from "../../components/projectCard";
import axios from "axios";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://5.57.35.227:5000/api/lastProjects")
      .then((response) => setProjects(response.data), setLoading(false))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="projects-page">
      <div className="header">
        <div className="container">
          <h1>پروژه های تتاتیم</h1>
        </div>
      </div>
      <div className="projects">
        <div className="container">
          {isLoading === true ? (
            <p>درحال بارگذاری</p>
          ) : (
            projects.map((project, index) => (
              <ProjectCard
                key={index}
                image={project.banner}
                name={project.title}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage;
