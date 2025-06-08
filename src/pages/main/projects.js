import ProjectCard from "../../components/projectCard";

function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="header">
        <div className="container">
          <h1>پروژه های تتاتیم</h1>
        </div>
      </div>
      <div className="projects">
        <div className="container">
          <ProjectCard
            image="./assets/images/tetalearn.png"
            name="سایت تتالرن"
          />
          <ProjectCard
            image="./assets/images/tetalearn.png"
            name="سایت تتالرن"
          />
          <ProjectCard
            image="./assets/images/tetalearn.png"
            name="سایت تتالرن"
          />
          <ProjectCard
            image="./assets/images/tetalearn.png"
            name="سایت تتالرن"
          />
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage