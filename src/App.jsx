import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CartProvider } from './context/CartContext';
import Cart from './components/Cart/Cart';
import LoginScreen from './components/Auth/LoginScreen';
import { AuthContextProvider } from './context/AuthContext';
function App() {
  return (
    <AuthContextProvider>
      <CartProvider>
        <BrowserRouter>
          <LoginScreen />
          <>
            <Routes>
              <Route path="*" element={<Header />} />
            </Routes>
            <Routes>
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
        </BrowserRouter>
      </CartProvider>
    </AuthContextProvider>
  );
}

export default App;
