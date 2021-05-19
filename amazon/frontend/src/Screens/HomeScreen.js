import React, { useEffect, useState } from 'react'
import { BrowserRouter , Route } from 'react-dom'
import { Link } from 'react-router-dom';


const HomeScreen = () => {
  return (
    <div className="home-main">
      <header className="App-header">
        <Link to="/Shopping" className="header-shop">Shopping</Link>
        <Link to="/about us"className="header-about">About us</Link>
        <Link to="/Signin" className="header-signin">Sign In</Link>
        <Link to="/Cart" className="header-cart">Cart</Link>
        </header>

        <div className="containBody">
            <img className="pic-1" src="/images/Bild1.jpg" alt="drinks" />
            <div className="pic-text">
                <p>Lorem ipsum dolor sit amet,</p>
             <p>consectetur adipiscing elit,</p> 
             <p>sed do eiusmod tempor incididunt ut labore</p> <p>et dolore magna aliqua.</p>
             <p>Ut enim ad minim veniam,</p> 
             <p>quis nostrud exercitation ullamco laboris </p> <p>nisi ut aliquip ex ea commodo consequat.</p> 
             Duis aute irure dolor in reprehenderit in voluptate <p>velit esse cillum dolore eu fugiat nulla pariatur.</p> 
             </div>
        
            <div>
                 <img className="pic-2" src="/images/Bild4.jpg" alt="bluedrink" />
                 <img className="pic-7" src="/images/Bild7.jpg" alt="fastDilevry"/>
            </div>
            </div>
            <div className="containBodyTwo">
                <img className="pic-8" src="/images/Bild8.jpg" alt="beachDrink" /> 
                <img className="pic-9" src="/images/Bild9.jpg" alt="blueCoctail" />
                <img className="pic-6" src="/images/Bild6.jpg" alt="Tropics" />
            </div>
        
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                  
    </div>
  )
}

export default HomeScreen
