import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom'; 
import { Navbar } from './Components/Navbar/Navbar';
import LoginPage from './Pages/LoginPage'; 
import Home from './Pages/Home';
import './App.css';
import ProductCategory from './Pages/ProductCategory';
import Cart from './Pages/Cart';
import Product from './Pages/Product';
import SignUpPage from './Pages/SignUpPage';
import Footer from './Components/Footer/Footer';
import {OrdersPage} from './Pages/OrdersPage';



function App() {
  return (
  <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/consoles' element={<ProductCategory category="Console"/>}/>
    <Route path='/games' element={<ProductCategory category="Game"/>}/>

    
    <Route path='/product/:productId' element={<Product/>}/>

    
    <Route path='/myorders' element={<OrdersPage/>}/>

    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/signup' element={<SignUpPage/>}/> 
</Routes>
    <Footer/>
    </BrowserRouter>
  </div>
  );
}

export default App;
