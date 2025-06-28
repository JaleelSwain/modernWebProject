import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { Navbar } from './Components/Navbar/Navbar';
import LoginPage from './Pages/LoginPage'; 
import Home from './Pages/Home';
import './App.css';
import ProductCategory from './Pages/ProductCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';

function App() {
  return (
  <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/consoles' element={<ProductCategory category="consoles"/>}/>
      <Route path='/games' element={<ProductCategory category="Games"/>}/>
      <Route path="/product" element={<Product/>}>
        <Route path=':productid' element={<Product/>}/>
      </Route>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/login' element={<LoginPage/>}/>
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
