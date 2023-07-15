import { Link } from 'react-router-dom';
import './ItemCard.scss';

const ItemCard = ({ id, nombre, stock, precio, descripcion, img }) => {
  return (
    <div className="card col-3 py-5 p-5 my-3">
      <h4>{nombre}</h4>
      <img src={img} alt={nombre} className="card-img" />
      <p className='description'>{descripcion}</p>
      <p className='product-price'>Precio: $ {precio}</p>
      <Link className="btn card-btn text-white p-1 mx-5" to={`/detail/${id}`}>
        Ver más
      </Link>
    </div>
  );
};

export default ItemCard;
