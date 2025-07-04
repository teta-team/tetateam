import { useEffect, useState } from "react";
import ProjectCard from "../../components/projectCard";
import axios from "axios";

function ProjectsPage() {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://5.57.35.227:5000/api/projects")
      .then((response) => {
        setProjects(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="projects-page">
      <div className="header">
        <div className="container">
          <h1>پروژه‌های تتاتیم</h1>
        </div>
      </div>
      <div className="projects">
        <div className="container">
          {isLoading ? (
            <p>در حال بارگذاری...</p>
          ) : (
            projects.map((project) => (
              <ProjectCard
                key={project.id}
                id={project.id}
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
