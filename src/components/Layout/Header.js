import React from "react";
import HeaderCartButton from "./HeaderCartButton";
import classes from "./Header.module.css";
import appleHeader from "../../assets/appHeader.jpeg";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Apple Shop</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes["main-image"]}>
        <img src={appleHeader} alt="Apple Logo" />
      </div>
    </>
  );
};

export default Header;
