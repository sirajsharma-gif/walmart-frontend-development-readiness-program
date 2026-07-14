import { FC } from "react";

import { TProduct } from "../models/product";

import styles from "./styles/FeaturedProducts.module.css";
import Link from "next/link";

type FeaturedProductsProps = {
  products: TProduct[];
};

export const FeaturedProducts: FC<FeaturedProductsProps> = ({ products }) => {
  return (
    <section className="section">
      <div className="section-head">
        <h2>Featured products</h2>
        <a href="products.html">View all →</a>
      </div>
      <div className={styles.productGrid}>
        {/* component: ProductCard — repeat per product  */}
        {products.map((product) => (
          <article className={styles.productCard} key={product.id}>
            <div className="img-ph">IMG</div>
            <div className={styles.productCardBody}>
              <h3 className={styles.productCardTitle}>
                <Link href={`/products/${product.id}`}>{product.name}</Link>
              </h3>
              <div className="rating">
                ★★★★☆ <span className="muted">{product.rating}</span>
              </div>
              <div>
                <span className="price">${product.price}</span>
                <span className={styles.priceOld}>${product.price}</span>
              </div>
              <button className="btn btn-sm">Add to cart</button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
