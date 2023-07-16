import { useContext } from 'react';
import './Cart.scss';
import { CartContext } from '../../context/CartContext';
import { BsTrash } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, totalCompra, vaciarCarrito, eliminarDelCarrito } =
    useContext(CartContext);

  return (
    <div className="container cart-total">
      {cart.length === 0 ? (
        <>
          <h2>Tu carrito esta vacio</h2>
          <hr />
          <p className="products-empty">
            Puedes agregar productos y visualizarlos aqui
          </p>
          <Link className="btn btn-success" to="/">
            Explorar la tienda
          </Link>
        </>
      ) : (
        <>
          <h2>Tus productos</h2>
          <hr />
          {cart.map((prod) => (
            <div key={prod.id}>
              <h4>{prod.nombre}</h4>
              <img className="detail-img" src={prod.img} alt={prod.nombre} />
              <p>Precio: ${prod.precio}</p>
              <p>Cantidad: {prod.cantidad}</p>
              <button
                onClick={() => eliminarDelCarrito(prod.id)}
                className="btn btn-danger"
              >
                <BsTrash />
              </button>
              <hr />
            </div>
          ))}
          <div>
            <h4>Total: ${totalCompra()}</h4>
            <hr />
            <button onClick={vaciarCarrito} className="btn btn-danger my-1">
              Vaciar el carrito
            </button>
            <Link className="btn btn-success m-1" to="/checkout">
              Ir a checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
