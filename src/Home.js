import Axios from "axios";
import React, {useState, useEffect, useCallback, axios} from "react";
import "./Home.css";
import Product from "./Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = () => {
    Axios.get("http://192.168.88.24:8000/api/v1/foods/").then(res => {
      console.log(res)
      setProducts(res.data)
    });
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return products.map((product) => {
    return (
          <Product
            id= {product.id}
            title= {product.title}
            content={product.content}
            weight={product.weight}
            image={product.image}
            in_stock={product.instock}
            price={product.price}
          />
    );
  })
}

function Home() {
  return (
    <div className="home">
      <div className="home__container">

        <div className="home__row">
        <Products />
        </div>
      </div>
    </div>
  );
}

export default Home;
