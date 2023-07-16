import Header from '../components/Header/Header';
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';
import Cart from '../components/Cart/Cart';
import LoginScreen from '../components/Auth/LoginScreen';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const AppRouter = () => {
    const {user} = useContext(AuthContext)
  return (
    <BrowserRouter>
      {user.logged ? (
        <>
          <Routes>
            <Route path="*" element={<Header />} />
            <Route path="/" element={<ItemListContainer />} />
            <Route
              path="/productos/:categoryId"
              element={<ItemListContainer />}
            />
            <Route path="/cart" element={<Cart />} />
            <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
            <Route path="*" element={<Navigate to={'/'} />} />
          </Routes>
        </>
      ) : (
        <Routes>
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default AppRouter;
