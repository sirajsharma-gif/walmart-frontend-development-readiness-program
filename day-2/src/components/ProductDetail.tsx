import AddToCart from "./AddToCart";

import styles from "./styles/ProductDetail.module.scss";

export default function ProductDetail() {
  return (
    <section className={styles.detail} aria-labelledby="product-title">
      <p className={styles.masthead}>Sneaker Company</p>
      <h1 className={styles.title} id="product-title">
        Fall Limited Edition
        <br />
        Sneakers
      </h1>
      <p className={styles.description}>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they’ll withstand everything the
        weather can offer.
      </p>
      <div className={styles.price}>
        <span className={styles.priceCurrent}>
          <span className="sr-only">Current Price</span>
          $125.00
        </span>
        <span className={styles.priceDiscount}>
          <span className="sr-only">Discount Percentage</span>
          50%
        </span>
        <s className={styles.priceOriginal}>
          <span className="sr-only">Original Price</span>
          $250.00
        </s>
      </div>

      <AddToCart />
    </section>
  );
}
