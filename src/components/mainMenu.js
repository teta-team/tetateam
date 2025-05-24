import { Link } from "react-router-dom";

function MainMenu() {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <Link to="/">
            <img src="./assets/images/logo512.png" alt="teta team logo" />
          </Link>
        </div>
        <nav>
          <li className="active">
            <Link to="/">خانه</Link>
          </li>
          <li>
            <Link to="">پروژه ها</Link>
          </li>
          <li>
            <Link to="">درباره ما</Link>
          </li>
          <li>
            <Link to="">ارتباط با ما</Link>
          </li>
        </nav>
      </div>
    </header>
  );
}

export default MainMenu;
