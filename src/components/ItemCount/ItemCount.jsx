

const ItemCount = ({max, counter, setCantidad, handleAgregar}) => {
  
  const handleSumar = () => {
     counter < max && setCantidad(counter + 1);
  };  

  const handleRestar = () => {
     counter > 1 && setCantidad(counter - 1);
  };


  return (
    <div>
      <button onClick={handleRestar} className="btn btn-outline-primary">
        -
      </button>
      <span className="m-3">{counter}</span>
      <button onClick={handleSumar} className="btn btn-primary">
        +
      </button>
      <br />
      <button onClick={handleAgregar} className='mt-2 p-2 btn btn-success'>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
