
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import { useProductos } from '../../hooks/useProductos';
import { useParams } from 'react-router-dom';

const ItemListContainer = () => {
  const { productos,loading } = useProductos();
  console.log(loading,productos);
  
  return (
    <div className='item-container'>
      {
      loading
        ? <h2>Cargando..</h2> 
        : <ItemList items={productos} />}
      
    </div>
  );
;}

export default ItemListContainer;
