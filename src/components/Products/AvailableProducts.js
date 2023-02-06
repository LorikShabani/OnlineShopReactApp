import React from "react";
import Card from "../UI/Card";
import ProductItem from "./ProductItem/ProductItem";
import classes from "./AvailableProducts.module.css";

const APPLE_PRODUCTS = [
  {
    id: "p1",
    name: "iPhone",
    description: "A popular smartphone",
    price: 799,
  },
  {
    id: "p2",
    name: "iPad",
    description: "A tablet computer",
    price: 499,
  },
  {
    id: "p3",
    name: "Macbook Pro",
    description: "A high-performance laptop",
    price: 1499,
  },
  {
    id: "p4",
    name: "Apple Watch",
    description: "A smartwatch",
    price: 329,
  },
];

const AvailableProducts = () => {
  const productsList = APPLE_PRODUCTS.map((product) => (
    <ProductItem
      id={product.id}
      key={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ));

  return (
    <section className={classes.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableProducts;
