import { useContext, useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.scss';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
const ItemDetail = ({
  id,
  nombre,
  precio,
  category,
  descripcion,
  img,
  stock,
}) => {
  const { agregarAlCarrito, isInCart } = useContext(CartContext);
  const [cantidad, setCantidad] = useState(1);

  const handleAgregar = () => {
    const item = {
      id,
      nombre,
      precio,
      category,
      descripcion,
      img,
      stock,
      cantidad,
    };
    agregarAlCarrito(item);
  };

  return (
    <div className="container item-detail">
      <h2>{nombre}</h2>
      <img src={img} alt={nombre} className="detail-img" />
      <p>{descripcion}</p>
      <h4>Precio: ${precio}</h4>
      {isInCart(id) ? (
        <Link className="btn btn-success" to="/cart">
          Terminar mi compra
        </Link>
      ) : (
        <ItemCount
          max={stock}
          counter={cantidad}
          setCantidad={setCantidad}
          handleAgregar={handleAgregar}
        />
      )}
    </div>
  );
};

export default ItemDetail;
