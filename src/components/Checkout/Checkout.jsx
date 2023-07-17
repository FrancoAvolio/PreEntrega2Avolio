import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import './Checkout.scss';
import { useCartContext } from '../../context/CartContext';
import { collection, addDoc} from 'firebase/firestore';
import { db } from '../../firebase/config';

export const Checkout = () => {
  const { cart, totalCompra } = useCartContext();
  const [orderId, setOrderId] = useState(null);
  const [values, setValues] = useState({
    nombre: '',
    direccion: '',
    email: '',
  });
  const handleInputChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const orden = {
      cliente: values,
      items: cart,
      total: totalCompra(),
    };
    const ordersRef = collection(db, 'orders');
    addDoc(ordersRef, orden)
      .then((doc) => {
        setOrderId(doc.id)
      })
      .catch((err) => console.log(err));
  };

  if (orderId) {
    return (
      <div>
        <div className="container order-container">
          <h2>Tu compra se registro correctamente!</h2>
          <p>
            Tu numero de compra es: <strong>{orderId}</strong>
          </p>
          <Link to = "/" className='btn btn-primary'>Volver al inicio</Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return <Navigate to="/" />
  }

  return (
    <div className="container checkout-container">
      <h2>Checkout</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleInputChange}
          value={values.nombre}
          type="text"
          placeholder="Nombre"
          className="form-control my-2"
          name="nombre"
        />
        <input
          onChange={handleInputChange}
          value={values.direccion}
          type="text"
          placeholder="Direccion"
          className="form-control my-2"
          name="direccion"
        />
        <input
          onChange={handleInputChange}
          value={values.email}
          type="email"
          placeholder="Email"
          className="form-control my-2"
          name="email"
        />
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
