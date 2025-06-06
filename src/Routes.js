import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
// Pages
import MainPages from "./pages/layouts/mainPages";
import HomePage from "./pages/main/home";
import ProjectsPage from "./pages/main/projects";
import AboutPage from "./pages/main/about";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPages />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
