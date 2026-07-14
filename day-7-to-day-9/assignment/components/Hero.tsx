import { FC } from "react";

import Link from "next/link";

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
        <Link className="btn btn-primary" href="/products?sort=price-asc">
          Shop deals
        </Link>
      </div>
      <div className="img-ph">HERO 4:3</div>
    </section>
  );
};
