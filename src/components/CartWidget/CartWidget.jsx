import { Link } from 'react-router-dom';
import './CartWidget.scss';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
const CartWidget = () => {
  const { totalCantidad } = useContext(CartContext);
  return (
    <>
      <Link to="/cart" className="cart">
        🛒<span className="span-cart">{totalCantidad()}</span>
      </Link>
    </>
  );
};

export default CartWidget;
