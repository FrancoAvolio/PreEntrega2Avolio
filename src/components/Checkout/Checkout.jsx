import { useState, Navigate } from 'react';
import './Checkout.scss';
import { useCartContext } from '../../context/CartContext';

export const Checkout = () => {
  const { cart, totalCompra } = useCartContext();
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
  };

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
