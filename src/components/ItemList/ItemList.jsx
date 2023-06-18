import ItemCard from '../ItemCard/ItemCard';

const ItemList = ({ items }) => {
  return (
    <div className=" container item-container">
      <h2>Ofertas de invierno</h2>
      <hr />
      <div className="row">
        {items.map((prod) => (
          <ItemCard key={prod.id} {...prod}/>
        ))}
      </div>
    </div>
  );
};

export default ItemList;
