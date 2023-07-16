import './Checkout.scss';

export const Checkout = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="container checkout-container">
      <h2>Checkout</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" className="form-control my-2" />
        <input
          type="text"
          placeholder="Direccion"
          className="form-control my-2"
        />
        <input type="email" placeholder="Email" className="form-control my-2" />
        <button className="btn btn-primary" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Checkout;
