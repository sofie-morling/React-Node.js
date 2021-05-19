import React, { useEffect, useState } from 'react'
import { BrowserRouter , Route } from 'react-dom'
import { Link } from 'react-router-dom';


const HomeScreen = () => {
  return (
    <div>
      <header className="App-header">
        <Link to="/Shopping" className="header-shop">Shopping</Link>
        <Link to="/about us"className="header-about">About us</Link>
        <Link to="/Signin" className="header-sign in">Sign In</Link>
        <Link to="/Cart" className="header-cart">Cart</Link>
        </header>
    </div>
  )
}

export default HomeScreen
