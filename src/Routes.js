import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
// Pages
import MainPages from "./pages/layouts/mainPages";
import HomePage from "./pages/main/home";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPages />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
