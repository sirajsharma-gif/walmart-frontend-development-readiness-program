import { FC } from "react";

import styles from "./styles/FeaturedProducts.module.css";

export const FeaturedProducts: FC = () => {
  return (
    <section className="section">
      <div className="section-head">
        <h2>Featured products</h2>
        <a href="products.html">View all →</a>
      </div>
      <div className={styles.productGrid}>
        {/* component: ProductCard — repeat per product  */}
        <article className={styles.productCard}>
          <div className="img-ph">IMG</div>
          <div className={styles.productCardBody}>
            <h3 className={styles.productCardTitle}>
              <a href="product-detail.html">iPhone 9 — 64GB</a>
            </h3>
            <div className="rating">
              ★★★★☆ <span className="muted">4.6</span>
            </div>
            <div>
              <span className="price">$549.00</span>
              <span className={styles.priceOld}>$599.00</span>
            </div>
            <button className="btn btn-sm">Add to cart</button>
          </div>
        </article>
        <article className={styles.productCard}>
          <div className="img-ph">IMG</div>
          <div className={styles.productCardBody}>
            <h3 className={styles.productCardTitle}>
              <a href="product-detail.html">MacBook Pro 14"</a>
            </h3>
            <div className="rating">
              ★★★★★ <span className="muted">4.9</span>
            </div>
            <div>
              <span className="price">$1,749.00</span>
            </div>
            <button className="btn btn-sm">Add to cart</button>
          </div>
        </article>
        <article className={styles.productCard}>
          <div className="img-ph">IMG</div>
          <div className={styles.productCardBody}>
            <h3 className={styles.productCardTitle}>
              <a href="product-detail.html">Sony WH-1000XM5</a>
            </h3>
            <div className="rating">
              ★★★★☆ <span className="muted">4.7</span>
            </div>
            <div>
              <span className="price">$329.00</span>
            </div>
            <button className="btn btn-sm">Add to cart</button>
          </div>
        </article>
        <article className={styles.productCard}>
          <div className="img-ph">IMG</div>
          <div className={styles.productCardBody}>
            <h3 className={styles.productCardTitle}>
              <a href="product-detail.html">Samsung 49" Odyssey</a>
            </h3>
            <div className="rating">
              ★★★★☆ <span className="muted">4.5</span>
            </div>
            <div>
              <span className="price">$899.00</span>
              <span className={styles.priceOld}>$1,099.00</span>
            </div>
            <button className="btn btn-sm">Add to cart</button>
          </div>
        </article>
      </div>
    </section>
  );
};
