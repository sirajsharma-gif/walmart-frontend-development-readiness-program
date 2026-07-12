import Link from "next/link";
import { FC } from "react";

import styles from "./styles/SiteHeader.module.css";

const LINKS = [
  {
    label: "Products",
    route: "/products",
  },
  {
    label: "Categories",
    route: "/category",
  },
  {
    label: "Blog",
    route: "/blog",
  },
];

export const SiteHeader: FC = () => {
  return (
    <header className={styles.siteHeader}>
      <div className={`container ${styles.headerInner}`}>
        <Link className={styles.logo} href="/">
          Nex<span>Shop</span>
        </Link>
        <nav className={styles.mainNav}>
          {LINKS.map((link) => (
            <Link key={link.route} href={link.route} passHref>
              {link.label}
            </Link>
          ))}
        </nav>
        <div className={styles.headerActions}>
          <Link href="/search">Search</Link>
          <Link className={styles.cartLink} href="/cart">
            Cart<span className={styles.cartCount}>3</span>
          </Link>
          <Link href="/login">Log in</Link>
        </div>
      </div>
    </header>
  );
};
