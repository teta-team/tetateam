import { Link } from "react-router-dom"

function ProjectsPage() {
  return (
    <div className="projects-page">
      <div className="header">
        <div className="container">
          <h1>پروژه های تتا تیم</h1>
        </div>
      </div>
      <div className="projects">
        <div className="container">
          <Link to="" className="box">
            <img src="./assets/images/tetalearn.png" alt="سایت تتالرن" />
            <h3>سایت تتالرن</h3>
          </Link>
          <Link to="" className="box">
            <img src="./assets/images/tetalearn.png" alt="سایت تتالرن" />
            <h3>سایت تتالرن</h3>
          </Link>
          <Link to="" className="box">
            <img src="./assets/images/tetalearn.png" alt="سایت تتالرن" />
            <h3>سایت تتالرن</h3>
          </Link>
          <Link to="" className="box">
            <img src="./assets/images/tetalearn.png" alt="سایت تتالرن" />
            <h3>سایت تتالرن</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectsPage