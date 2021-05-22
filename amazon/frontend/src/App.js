import React from 'react';
import { useSelector } from 'react-redux';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import CartScreen from './Screens/CartScreen';
import HomeScreen from './Screens/HomeScreen';
import ProductScreen from './Screens/ProductScreen';
import ShopScreen from './Screens/ShopScreen';
import AboutUs from './Screens/AboutUs';
import SigninScreen from './Screens/signinScreen';

function App() {
  return (
    <BrowserRouter>
    <div className="grid-container">
      
    <header className="App-header">
        <Link to="/" className="header-home">Home</Link>
        <Link to="/Shopping" className="header-shop">Shopping</Link>
        <Link to="/aboutus"className="header-about">About us</Link>
        <Link to="/Signin" className="header-signin">Sign In</Link>
        <Link to="/Cart" className="header-cart">Cart</Link>
        </header>
        <main className="main">
            <div className="content">
              <Route path="/Signin" component={SigninScreen} />
              <Route path="/aboutus" component={AboutUs} />
              <Route path="/Shopping" component={ShopScreen} />
              <Route path="/product/:id" component={ProductScreen} />
              <Route path="/cart/:id?" component={CartScreen} />
              <Route path="/" exact component={HomeScreen} />
                
            </div>
        </main>
        <footer className="footer">
            All right reserved.
        </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
