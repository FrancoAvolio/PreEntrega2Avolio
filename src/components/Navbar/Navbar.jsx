import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.scss"
const Navbar = () => {
  return (
    <div>
        <nav className="navbar">
            <a href="#"className="nav-link">Calzado</a>
            <a href="#"className="nav-link">Remeras</a>
            <a href="#"className="nav-link">Jeans</a>
            <a href="#"className="nav-link">Sweaters</a>
            <CartWidget/>
        </nav>
    </div>
  )
}

export default Navbar