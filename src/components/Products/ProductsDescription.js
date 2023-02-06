import React from "react";
import classes from "./ProductsDescription.module.css";

const ProductsDescription = () => {
  return (
    <section className={classes.description}>
      <h2>Apple Shop. The best way to buy the products you love.</h2>{" "}
      <p>
        Apple products are synonymous with design and innovation, featuring
        sleek and intuitive interfaces that offer users a seamless experience.
      </p>
      <p>The latest. Take a look at what's new, right now.</p>
    </section>
  );
};

export default ProductsDescription;
