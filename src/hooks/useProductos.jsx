import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { db } from '../firebase/config';

export const useProductos = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { categoryId } = useParams();
  useEffect(() => {
    setLoading(true);
    const productosRef = collection(db, 'productos');
    const q = categoryId
      ? query(productosRef, where('category', '==', categoryId))
      : productosRef;
    getDocs(q)
      .then((resp) => {
        const items = resp.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
        setProductos(items);
      })
      .catch((e) => console.log(e))
      .finally(() => setLoading(false));
  }, [categoryId]);

  return {
    productos,
    loading,
  };
};
