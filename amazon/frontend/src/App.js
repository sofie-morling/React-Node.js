import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
  }
  return (
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <a href="index.html">Coctail Shop</a>
            </div>
            <div className="header-links">
                <a href="cart.html">Cart</a>
                <a href="signin.html">Sign In</a>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shopping Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
            <ul>
                <li>
                    <a href="index.html">Pinja Colada</a>
                </li>
                <li>
                    <a href="index.html">Mohito</a>
                </li>
                <li>
                    <a href="index.html">Longisland Icetea</a>
                </li>
                <li>
                    <a href="index.html">Mai Thai</a>
                </li>
                <li>
                    <a href="index.html">Tequlia Sunrise</a>
                </li>
            </ul>
        </aside>
        <main className="main">
            <div className="content">
                <ul className="products">
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/d1.jpg" alt="product"/>
                            <div className="product-name">
                                <a href="product.html">Pinja Colada</a>
                                </div>
                            <div className="product-price">30 coins</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/d2.jpg" alt="product"/>
                            <div className="product-name">
                                <a href="product.html">Longisland Icetea</a>
                                </div>
                            <div className="product-price">68 coins</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/d3.jpg" alt="product"/>
                            <div className="product-name">
                                <a href="product.html">Mai Thai</a>
                                </div>
                            <div className="product-price">27 coins</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/d4.jpg" alt="product"/>
                            <div className="product-name">
                                <a href="product.html">Mohito</a>
                                </div>
                            <div className="product-price">55 coins</div>
                        </div>
                    </li>
                    <li>
                        <div className="product">
                            <img className="product-image" src="/images/d5.jpg" alt="product"/>
                            <div className="product-name">
                                <a href="product.html">Tequlia Sunrise</a>
                                </div>
                            <div className="product-price">10 coins</div>
                        </div>
                    </li>
                    
                </ul>
            </div>
        </main>
        <footer className="footer">
            All right reserved.
        </footer>
    </div>
  );
}

export default App;
