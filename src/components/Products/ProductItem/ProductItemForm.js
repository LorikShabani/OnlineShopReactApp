import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./ProductItemForm.module.css";

const ProductItemForm = (props) => {
  const amountInputRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmountNumber === 0 ||
      enteredAmountNumber < 0 ||
      enteredAmountNumber > 10
    ) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount" + props.id,
          type: "number",
          min: "1",
          max: "10",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>Add To Cart</button>
      {!amountIsValid && <p>Please Enter a Valid Amount (1-10)</p>}
    </form>
  );
};

export default ProductItemForm;
