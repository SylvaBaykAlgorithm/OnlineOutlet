import React from 'react';
import "./Product.css"

function Product({image, title, price}) {
    return (
        <div className="product">
            <div className='product__info'>
                <p>{title}</p>
                <p className='product__price'>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className='product__rating'>
                    <p>🌟</p>
                </div>
            </div>
            <img src={image} />
            <button>Add to the Bag</button>
        </div>
    );
}

export default Product
