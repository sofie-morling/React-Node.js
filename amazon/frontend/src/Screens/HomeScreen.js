import React, { useEffect, useState } from 'react'
import { BrowserRouter , Route } from 'react-dom'
import { Link } from 'react-router-dom';


const HomeScreen = () => {
  return (
    <div>
      <header className="App-header">
        <Link to="/Signin">Sign In</Link>
        <Link className="header-about">About us</Link>
        <Link to="Shop" className="header-shop">Shop</Link>
        <Link to="/Cart" className="header-cart">Cart</Link>
        </header>
    </div>
  )
}

export default HomeScreen
