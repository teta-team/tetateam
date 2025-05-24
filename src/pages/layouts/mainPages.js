import "../../assets/css/main.css"
import { Outlet } from "react-router-dom"
import MainMenu from "../../components/mainMenu"
import Footer from "../../components/footer"

function MainPages() {
  return (
    <div className="main">
      <MainMenu />
      <Outlet />
      <Footer />
    </div>
  )
}

export default MainPages