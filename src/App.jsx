import React from "react";
import { Routes, Route } from 'react-router-dom';
import GlobalStyle from "./globalStyles";
import Home from "./pages/Home";
import Login from "./pages/Login"; 
import Product from "./pages/Product";
import Products from "./pages/Products"; 
import Register from "./pages/Register"; 
import Cart from "./pages/Cart";
import Category from "./pages/Category";
import PrivateRoute from './components/PrivateRoute/PrivateRoute'; // Asegúrate de que la ruta de importación sea correcta
import PublicRoute from './components/PublicRoute/PublicRoute'; // Asegúrate de que la ruta de importación sea correcta
import { UserProvider } from './components/UserContext/UserContext'; // Asegúrate de que la ruta de importación sea correcta

const App = () => {
  return (
    <>
    <UserProvider>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        }/>
        <Route path="/login" element={
          <PublicRoute>
            <Login />
          </PublicRoute>
        }/>
        <Route path="/products" element={
          <PrivateRoute>
            <Products />
          </PrivateRoute>
        }/>
        <Route path="/product" element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }/>
        <Route path="/products/:id" element={
          <PrivateRoute>
            <Product />
          </PrivateRoute>
        }/>
        <Route path="/register" element={
          <PublicRoute>
            <Register />
          </PublicRoute>
        }/>
        <Route path="/cart/:id" element={ 
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }/>
        <Route path="/categorias/:categoryId/productos" element={
          <PrivateRoute>
            <Category />
          </PrivateRoute>
        }/>
      </Routes>
      </UserProvider>
    </>
  );
};

export default App;
