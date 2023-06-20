import "./ItemDetail.scss"
const ItemDetail = ({ id, nombre, precio, category, descripcion, img }) => {
  return (
    <div className="container item-detail">
      <h2>{nombre}</h2>
      <img src={img} alt={nombre} />
      <p>{descripcion}</p>
      <h4>Precio: ${precio}</h4>
    </div>
  );
};

export default ItemDetail;
