import { FC } from "react";

import styles from "./styles/SiteHeader.module.css";

export const Hero: FC = () => {
  return (
    <section className={styles.hero}>
      <div>
        <div className="eyebrow">New season, new gear</div>
        <h1>Electronics that earn their spec sheet</h1>
        <p>
          Laptops, audio, smart home and more — restocked hourly. Prices you can
          trust because this page revalidates itself.
        </p>
        <a className="btn btn-primary" href="products.html?sort=price-asc">
          Shop deals
        </a>
      </div>
      <div className="img-ph">HERO 4:3</div>
    </section>
  );
};
