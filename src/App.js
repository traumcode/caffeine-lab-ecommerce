import React from 'react';
import './App.scss';
import { Routes, Route } from "react-router-dom";
import Pay from "./Components/Pay/pay.component";
import HomePage from './Pages/HomePage/HomePage.component';
import ProductList from './Pages/ProductList/ProductList.component';
import { MusicProvider } from './Context/musicContext';
import DarkRoast from './Pages/Shop/Brazilia/Brazilia.component';
import ShopHomePage from './Pages/Shop/ShopHomePage/ShopHomePage.component';
import Ethiopia from './Pages/Shop/Ethiopia/Ethiopia.component';
import Guatemala from './Pages/Shop/Guatemala/Guatemala.component';
import Product from './Components/Product/Product.component';
import About from './Pages/About/About.component';
import Cart from './Components/Cart/Cart.component';
import LoginList from './Pages/Login/LoginList.component';
import SignIn from './LoginElements/SignIn/SignIn.component';
import Register from './LoginElements/Register/Register.component';
import Account from './Pages/Account/Account.component';
import Reset from './LoginElements/Reset/reset.component';
import ResetPass from './LoginElements/ResetPass/ResetPass.component';
import Columbia from "./Pages/Shop/Columbia/Columbia";

const App =()=>{
  return(
    <div className="App">
      <MusicProvider>
    <Routes>
    <Route path="/" element={<HomePage/>}/>
      <Route path="/pay" element={<Pay/>}/> 
      <Route path="shop" element={<ProductList/>}>
        <Route index element={<ShopHomePage/>}/>
        <Route path=":product" element={<Product/>}/>
        <Route path="brazilia" element={<DarkRoast/>}/>
        <Route path="columbia" element={<Columbia/>}/>
        <Route path="ethiopia" element={<Ethiopia/>}/>
        <Route path="guatemala" element={<Guatemala/>}/>
        <Route path="cart" element={<Cart/>}/>
      </Route>
      <Route path="/about" element={<About/>}/>
      <Route path="/login" element={<LoginList/>}>
        <Route index element={<SignIn/>}/>
        <Route path="register" element={<Register/>}/>
        <Route path="password-reset" element={<Reset/>}/>
        <Route path="reset-pass/:token" element={<ResetPass/>}/>
      </Route>
      <Route path="/account" element={<Account/>}/>
     </Routes>
     </MusicProvider>
     </div>
  )
}

export default App;
