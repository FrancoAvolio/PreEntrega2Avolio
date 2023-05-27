import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <a href="#"className="nav-links">Calzado</a>
            <a href="#"className="nav-links">Remeras</a>
            <a href="#"className="nav-links">Jeans</a>
            <a href="#"className="nav-links">Sweaters</a>
            <CartWidget/>
        </nav>
    </div>
  )
}

export default Navbar