import React from 'react';
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

function Header() {
    return (
        <div className='header'>
            <img 
                className="header__logo"
                src='https://images-na.ssl-images-amazon.com/images/I/41E7zhXGVxL._AC_.jpg'
            />
            <div
                className="header__search">
                    <input
                        className="header__searchInput" type="text"
                    />
                    <SearchIcon
                    className="header__searchIcon" />
            </div>

            <div className="header__nav">
                <div className='head__option'>
                    <span className="header__optionLineOne">Hello Guest</span>
                    <span className="header__optionLineTwo">Sign In</span>

                </div>


                <div className='head__option'>
                <span className="header__optionLineOne">Returns</span>
                    <span className="header__optionLineTwo">& Orders</span>

                </div>



                <div className='head__option'>
                <span className="header__optionLineOne">Your</span>
                    <span className="header__optionLineTwo">Custom Perks</span>

                </div>

                <div className='header__optionBasket'>
                    <ShoppingBasketIcon />
                    <span className="header__optionLineTwo header__basketCount">0</span>

                </div>

            </div>
        
            
        </div>
    )
}

export default Header
