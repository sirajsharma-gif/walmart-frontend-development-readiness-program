import { FC } from "react";

import { TCategory } from "../models/category";

import styles from "./styles/CategoryTiles.module.css";
import Link from "next/link";

type CategoryTileProps = {
  categories: TCategory[];
};

export const CategoryTiles: FC<CategoryTileProps> = ({ categories }) => {
  return (
    <section className="section">
      <div className="section-head">
        <h2>Shop by category</h2>
      </div>
      <div className={styles.categoryTiles}>
        {/* component: CategoryTile — repeat per category  */}
        {categories.map((category) => (
          <Link
            className={styles.categoryTile}
            href={`/category/electronics/${category.id}`}
            key={category.id}
          >
            <div className="img-ph">IMG</div>
            {category.label}
          </Link>
        ))}
      </div>
    </section>
  );
};
