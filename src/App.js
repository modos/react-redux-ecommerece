import React, { Component } from 'react';
import Header from './components/Header'
import AllProducts from './pages/AllProducts';
import Notebooks from './pages/Notebooks'
import Smartphones from './pages/Smartphones';
import MyCart from './pages/MyCart';
import Product from './pages/Product';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        <Header></Header>
          <Routes>
            <Route path="/" element={<AllProducts />}></Route>
            <Route path="/notebooks" element={<Notebooks />}></Route>
            <Route path="/smartphones" element={<Smartphones />}></Route>
            <Route path="/cart" element={<MyCart />}></Route>
            <Route path="/products/:id" element={<Product />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
