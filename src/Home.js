import React from "react";
import "./Home.css";
import Product from "./Product.js";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                className="home__image" src="https://i.ytimg.com/vi/4rgo4yeC3C4/maxresdefault.jpg" alt="" />
           
                <div className="home__row">
                <Product price="19.99" title="The best banana pudding in the world" image='https://hips.hearstapps.com/vidthumb/images/delish-banana-pudding-cheesecake-still001-1526076114.jpg' />
                <Product price="15.99" title="This bomb azz sweet potato pie" image='https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/1506636151-sweet-potato-pie-1.jpg' />

              
                </div>

                <div className="home__row">
           
                </div>

                <div className="home__row">
           
                </div>

            </div>
        </div>
    )
}

export default Home
