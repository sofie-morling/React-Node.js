import React, { useEffect, useState } from 'react'
import { BrowserRouter , Route } from 'react-dom'
import { Link } from 'react-router-dom';


const HomeScreen = () => {
  return (
    <div className="home-main">
      

        <div className="containBody">
            <img className="pic-1" src="/images/Bild1.jpg" alt="drinks" />
            <div className="pic-text">
                <p>Lorem ipsum dolor sit amet,</p>
             <p>consectetur adipiscing elit,</p> 
             <p>sed do eiusmod tempor incididunt ut labore</p> <p>et dolore magna aliqua.</p>
             <p>Ut enim ad minim veniam,</p> 
             </div>
        
            <div>
              <div className="containPic-2">
                 <img className="pic-2" src="/images/Bild4.jpg" alt="bluedrink" />
                  <div className="middle">
                    <div className="textPic-2">Shop Now!</div>
                  </div>
                  </div>
                 <img className="pic-7" src="/images/Bild7.jpg" alt="fastDilevry"/>
            </div>
            </div>
            <div className="containBodyTwo">
              <div className="containPic-8">
                <img className="pic-8" src="/images/Bild8.jpg" alt="beachDrink" />
                <div className="middle-8">
                  <div className="textpic-8">Fresh Cocktails</div>
                </div>
                </div>
                <div className="containPic-9">
                <img className="pic-9" src="/images/Bild9.jpg" alt="blueCoctail" />
                <div className="middle-9">
                  <div className="textpic-9">Many flavours</div>
                </div>
                </div>
                <div className="containPic-6">
                <img className="pic-6" src="/images/Bild6.jpg" alt="Tropics" />
                <div className="middle-6">
                  <div className="textPic-6">Happy Hours!</div>
                </div>
                </div>
            </div>
        
                 <br></br>
                 <br></br>
                 <br></br>
                 <br></br>
                  
    </div>
  )
}

export default HomeScreen
