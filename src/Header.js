import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { Link } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
     auth.signOut();
    }
  }

  return (
    <div className="header">
      <Link to="/">
        <img
          class="header__logo"
          src="https://m.media-amazon.com/images/G/31/gno/sprites/nav-sprite-global-1x-reorg-privacy._CB541718031_.png"
        />
      </Link>

      <div className="header__search">
        <input className="header__searchInput" />

        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__nav">
        <Link to={!user && "/login"}>
          <div onClick={handleAuthentication} class="header__option">
            <span class="header__optionLineOne">Hello, {!user ? 'Guest' : user.email} </span>
            <span class="header__optionLineTwo">
             {user ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div class="header__option">
          <span class="header__optionLineOne">Returns</span>
          <span class="header__optionLineTwo">& Orders</span>
        </div>

        <div class="header__option">
          <span class="header__optionLineOne">Your</span>
          <span class="header__optionLineTwo">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
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
