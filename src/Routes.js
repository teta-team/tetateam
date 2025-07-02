import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
// Pages
import MainPages from "./pages/layouts/mainPages";
import HomePage from "./pages/main/home";
import ProjectsPage from "./pages/main/projects";
import AboutPage from "./pages/main/about";
import ContactPage from "./pages/main/contact";
import LoginPage from "./pages/login";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPages />}>
          <Route index element={<HomePage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
        </Route>

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
