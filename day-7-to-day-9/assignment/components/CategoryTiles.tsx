import { FC } from "react";

import styles from "./styles/CategoryTiles.module.css";

export const CategoryTiles: FC = () => {
  return (
    <section className="section">
      <div className="section-head">
        <h2>Shop by category</h2>
      </div>
      <div className={styles.categoryTiles}>
        {/* component: CategoryTile — repeat per category  */}
        <a className={styles.categoryTile} href="category.html">
          <div className="img-ph">IMG</div>
          Smartphones
        </a>
        <a className={styles.categoryTile} href="category.html">
          <div className="img-ph">IMG</div>
          Laptops
        </a>
        <a className={styles.categoryTile} href="category.html">
          <div className="img-ph">IMG</div>
          Audio
        </a>
        <a className={styles.categoryTile} href="category.html">
          <div className="img-ph">IMG</div>
          Monitors
        </a>
        <a className={styles.categoryTile} href="category.html">
          <div className="img-ph">IMG</div>
          Smart home
        </a>
        <a className={styles.categoryTile} href="category.html">
          <div className="img-ph">IMG</div>
          Accessories
        </a>
      </div>
    </section>
  );
};
