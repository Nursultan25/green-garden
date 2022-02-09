import React, { useState, useEffect } from 'react';
import './Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from './axios';
import Cookies from 'js-cookie';

function Payment() {
    const [{ basket, user }, dispatch] = useStateValue();
    const history = useHistory();

    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [disabled, setDisabled] = useState(true);

    const csrftoken = Cookies.get('csrftoken');

const SendData = () => {
    let obj = {
            id: basket.map(item => item.id)
    }
    let response = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': csrftoken
        },
        body: JSON.stringify(obj)
      };

      localStorage.setItem('session', JSON.stringify(response));

      function getSession(){
        return JSON.parse(localStorage.getItem('session'))
       }

    fetch("http://192.168.88.24:8000/api/v1/room/menu/", response)
    .then(res => {
        if(res.ok){
            console.log(res.status);
        } else {

        console.log(res.status)
        }
    }
    
    )
    console.log(response)
}
    return (
        <div className='payment'>
            <div className='payment__container'>
                <h1>
                    Checkout (
                        <Link to="/checkout">{basket?.length} items</Link>
                        )
                </h1>


                {/* Payment section - delivery address */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Delivery Address</h3>
                    </div>
                    <div className='payment__address'>
                        <p>{user?.email}</p>
                        <p>Green garden</p>
                        <p>room: ***</p>
                    </div>
                </div>

                {/* Payment section - Review Items */}
                <div className='payment__section'>
                    <div className='payment__title'>
                        <h3>Review items and delivery</h3>
                    </div>
                    <div className='payment__items'>
                        {basket.map(item => (
                            <CheckoutProduct
                                id= {item.id}
                                title= {item.title}
                                content={item.content}
                                weight={item.weight}
                                image={item.image}
                                instock={item.instock}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
            

                {/* Payment section - Payment method */}
                <div className='payment__section'>
                    <div className="payment__title">
                        <h3>Payment Method</h3>
                    </div>
                    <div className="payment__details">
                            {/* Stripe magic will go */}

                            <form>

                                <div className='payment__priceContainer'>
                                    <CurrencyFormat
                                        renderText={(value) => (
                                            <h3>Order Total: {value}</h3>
                                        )}
                                        decimalScale={2}
                                        value={getBasketTotal(basket)}
                                        displayType={"text"}
                                        thousandSeparator={true}
                                        prefix={"$"}
                                    />
                                    <button disabled={processing || disabled || succeeded}>
                                        <span onClick={SendData}>{processing ? <p>Processing</p> : "Order Now"}</span>
                                    </button>
                                </div>
                            </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment
