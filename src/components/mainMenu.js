import { Link, useLocation,  } from "react-router-dom";

function MainMenu() {
  let location = useLocation().pathname
  console.log(location);
  
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="./assets/images/logo512.png" alt="teta team logo" />
          </Link>
        </div>
        <nav>
          <li className={location === "/" ? "active" : ""}>
            <Link to="/">خانه</Link>
          </li>
          <li className={location === "/projects" ? "active" : ""}>
            <Link to="/projects">پروژه ها</Link>
          </li>
          <li className={location === "/about" ? "active" : ""}>
            <Link to="">درباره ما</Link>
          </li>
          <li className={location === "/contact" ? "active" : ""}>
            <Link to="">ارتباط با ما</Link>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default MainMenu;
