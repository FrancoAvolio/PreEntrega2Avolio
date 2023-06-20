import Navbar from '../Navbar/Navbar';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header fixed-top">
      <div className="header-container">
        <Link to="/" className="header-logo">
          <img
            className="img"
            src="https://res.cloudinary.com/teepublic/image/private/s--A9STzbqV--/t_Preview/b_rgb:000000,c_limit,f_auto,h_630,q_90,w_630/v1543633020/production/designs/3626189_0.jpg"
            alt=""
          />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
