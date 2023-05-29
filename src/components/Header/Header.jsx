import Navbar from "../Navbar/Navbar"
import "./Header.scss"

const Header = () => {
  return (
    <header className="header fixed-top">
        <div className="header-container">
            <a href="#" className="header-logo">LOGO</a>
            <Navbar/>
            </div>
    </header>
  )
}

export default Header