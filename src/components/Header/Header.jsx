import Navbar from '../Navbar/Navbar';
import './Header.scss';
import { Link } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';
const Header = () => {
  return (
    <header className="header fixed-top">
      <p className='banner-top'>Envío gratis a todo el país desde $33.000 ARS | 3 cuotas sin interés VISA,
      MasterCard </p>
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img
            className="img"
            src="https://res.cloudinary.com/teepublic/image/private/s--A9STzbqV--/t_Preview/b_rgb:000000,c_limit,f_auto,h_630,q_90,w_630/v1543633020/production/designs/3626189_0.jpg"
            alt=""
          />
        </Link>
        <Navbar />
        <CartWidget />
      </div>
    </header>
  );
};

export default Header;
