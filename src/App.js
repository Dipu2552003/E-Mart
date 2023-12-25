import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Products from './components/Products';
import Product from './components/Product';
import Cart from './components/Cart';

const App = () => {
  return (
    <div>
      
      <Router>
      <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/products" element={<Products></Products>}></Route>
          <Route path="/products/:id" element={<Product></Product>}></Route>
          <Route path="/cart" element=<Cart></Cart>></Route>
       
        </Routes>
      </Router>
    </div>
  );
};

export default App;
