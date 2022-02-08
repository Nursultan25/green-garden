import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { ShoppingCartOutlined } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function Header() {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="header">
      <Link to="/">
        <img
          className="header__logo"
          src="https://gardenhotel.kg/static/img/logo.png"
        />
      </Link>

      <div className="header__nav">

        <Link to='/orders' style={{ textDecoration: 'none' }}>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        <Link to='/Login' style={{ textDecoration: 'none' }}>
          <div className="header__option">
            <span className="header__optionLineOne">Login</span>
            <span className="header__optionLineTwo">& Room</span>
          </div>
        </Link>

        <Link to="/">
          <div className="header__center">
            Green Garden MENU
          </div>
      </Link>


        <Link to="/checkout" style={{ textDecoration: 'none' }}>
          <div className="header__optionBasket">
            <ShoppingCartOutlined fontSize='large' />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
