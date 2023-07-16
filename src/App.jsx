import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CartProvider } from './context/CartContext';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';
import React from 'react';
import Header from './components/Header/Header';
import Checkout from './components/Checkout/Checkout';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
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
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/detail/:itemId" element={<ItemDetailContainer />} />
          <Route path="*" element={<Navigate to={'/'} />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
