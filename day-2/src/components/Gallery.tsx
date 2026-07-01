import { useState } from "react";

import imgProduct1 from "../assets/images/image-product-1.jpg";
import imgProduct2 from "../assets/images/image-product-2.jpg";
import imgProduct3 from "../assets/images/image-product-3.jpg";
import imgProduct4 from "../assets/images/image-product-4.jpg";
import thumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/images/image-product-4-thumbnail.jpg";

import styles from "./styles/Gallery.module.scss";

const products = [
  { id: crypto.randomUUID(), img: imgProduct1, thumb: thumb1 },
  { id: crypto.randomUUID(), img: imgProduct2, thumb: thumb2 },
  { id: crypto.randomUUID(), img: imgProduct3, thumb: thumb3 },
  { id: crypto.randomUUID(), img: imgProduct4, thumb: thumb4 },
];

export default function Gallery() {
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);

  return (
    <section className={styles.gallery} aria-label="Product Image Gallery">
      <img
        className={styles.img}
        src={products[activeImageIndex].img}
        alt={`Product Image ${activeImageIndex + 1}`}
        id="product-image-main"
      />
      <ul className={styles.list}>
        {products.map((product, index) => (
          <li key={product.id} className={styles.item}>
            <button
              className={styles.btn}
              aria-controls="product-image-main"
              aria-label={`View Product Image ${index + 1}`}
              aria-current={activeImageIndex === index}
              onClick={() => setActiveImageIndex(index)}
            >
              <img
                className={styles.thumbnail}
                src={product.thumb}
                alt={`Product Thumbnail ${index + 1}`}
                aria-hidden="true"
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}
