import React from 'react';
import './CheckoutProduct.css'
import { useStateValue } from "./StateProvider";

function CheckoutProduct({id, title, content, weight, image, instock, price}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove the item from the basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} />

            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                <strong><small>Цена: </small>{price}</strong>
          <small>Сом</small>
                </p>
                <div className="product__content">
                <small>Ингредиенты: </small>
                <p>{content}</p>
            </div>
                <div className="product_weight">
                    <p><small>Веc: </small>{weight}</p>
                </div>
            <div className="product_instock">
                    <p><small>В наличии: </small>{instock}</p>
            </div>
                    <button onClick={removeFromBasket}>Remove from Basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
