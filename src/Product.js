import React from "react";
import "./Product.css";
import { useStateValue } from "./StateProvider";

function Product({id, title, content, weight, image, instock, price }) {
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        content: content,
        weight: weight,
        image: image,
        instock: instock,
        price: price
      },
    });
  };

  if (instock == false) {
    return (
    <div className="product">
      <div className="product__info">
        <img className="product__image" src={image} alt="food image" />
        <h2>{title}</h2>
        <p className="product__price">
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
          <p><small>Нет в наличии </small>{instock}</p>
        </div>
        <button className="not_in_stock">Продукта нет в наличии</button>
      </div>
      </div>
    )
  }

  return (
    <div className="product">
      <div className="product__info">
        <img className="product__image" src={image} alt="food image" />
        <h2>{title}</h2>
        <p className="product__price">
          <strong><small>Цена: </small>{price}</strong>
          <small>Сом</small>
        </p>
        <div className="product__content">
          <small>Ингредиенты: </small>
          <p>{content}</p>
        </div>
        <div className="product_weight">
          <p><small>Веc: </small>{weight}<small>гр </small></p>
        </div>
        <div className="product_instock">
          <p><small>В наличии </small>{instock}</p>
        </div>
        <button onClick={addToBasket}>Добавить в корзину</button>
      </div>
    </div>
  );
}

export default Product;
