import { FC } from "react";

import styles from "./styles/SiteFooter.module.css";

export const SiteFooter: FC = () => {
  return (
    <footer className={styles.siteFooter}>
      <div className={`container ${styles.footerInner}`}>
        <div>© 2026 NexShop — a Next.js practice project</div>
        <div>
          <a href="/about">About</a>
          <a href="/blog">Blog</a>
          <a href="/admin">Admin</a>
        </div>
      </div>
    </footer>
  );
};
