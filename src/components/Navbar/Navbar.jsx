import CartWidget from '../CartWidget/CartWidget';
import './Navbar.scss';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
        <Link className="nav-links" to="/">
          Inicio
        </Link>
        <Link to="/productos/calzado" className="nav-links">
          Calzado
        </Link>
        <Link to="/productos/remeras" className="nav-links">
          Remeras
        </Link>
        <Link to="/productos/jeans" className="nav-links">
          Jeans
        </Link>
        <Link to="/productos/sweaters" className="nav-links">
          Sweaters
        </Link>
        <CartWidget />
      </nav>
    </div>
  );
};

export default Navbar;
