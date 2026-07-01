import { useState } from "react";

import iconCartBlack from "../assets/icons/icon-cart-black.svg";
import iconMinus from "../assets/icons/icon-minus.svg";
import iconPlus from "../assets/icons/icon-plus.svg";

import styles from "./styles/AddToCart.module.scss";

export default function AddToCart() {
  const [quantity, setQuantity] = useState(0);

  const decrease = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setQuantity((prev) => (prev > 0 ? prev - 1 : 0));
  };

  const increase = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setQuantity((prev) => prev + 1);
  };

  const handleSubmit = (event: React.SubmitEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Quantity:", quantity);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.quantity}>
        <button
          className={styles.btnDecrease}
          aria-label="Decrease quantity"
          onClick={decrease}
        >
          <img
            src={iconMinus}
            alt="Minus icon for decreasing quantity"
            aria-hidden="true"
          />
        </button>
        <span className={styles.quantityValue}>{quantity}</span>
        <button
          className={styles.btnIncrease}
          aria-label="Increase quantity"
          onClick={increase}
        >
          <img
            src={iconPlus}
            alt="Plus icon for increasing quantity"
            aria-hidden="true"
          />
        </button>
      </div>
      <button type="submit" className={styles.submit} aria-label="Add to cart">
        <img
          className={styles.submitIcon}
          src={iconCartBlack}
          alt="Cart icon for add to cart button"
          aria-hidden="true"
        />
        Add to cart
      </button>
    </form>
  );
}
