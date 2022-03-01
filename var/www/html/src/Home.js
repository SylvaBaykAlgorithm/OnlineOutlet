import React from "react";
import "./Home.css";
import Product from "./Product.js";
function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                alt=""
                className="home__image" src='artPhotos.jpg' />
           
                <div className="home__row">
                <Product id="132943" price="19.99" title="The best banana pudding in the world" image='https://hips.hearstapps.com/vidthumb/images/delish-banana-pudding-cheesecake-still001-1526076114.jpg' rating={5} />
                <Product id="294832" price="15.99" title="This bomb azz sweet potato pie" image='https://hips.hearstapps.com/del.h-cdn.co/assets/17/39/1506636151-sweet-potato-pie-1.jpg' />
                </div>

                <div className="home__row">
                <Product id="349583" price="157.99" title="The best banana pudding in the world" image='https://hips.hearstapps.com/vidthumb/images/delish-banana-pudding-cheesecake-still001-1526076114.jpg' rating={4} />
                <Product id="449958" price="196.99" title="The best banana pudding in the world" image='https://hips.hearstapps.com/vidthumb/images/delish-banana-pudding-cheesecake-still001-1526076114.jpg' rating={1} />
                <Product id="494855" price="170.99" title="The best banana pudding in the world" image='https://hips.hearstapps.com/vidthumb/images/delish-banana-pudding-cheesecake-still001-1526076114.jpg' rating={5} />
                </div>

                <div className="home__row">
                <Product id="498508" price="200.99" title="The best banana pudding in the world" image='https://hips.hearstapps.com/vidthumb/images/delish-banana-pudding-cheesecake-still001-1526076114.jpg' rating={2} />
                </div>

            </div>
        </div>
    )
}

export default Home
