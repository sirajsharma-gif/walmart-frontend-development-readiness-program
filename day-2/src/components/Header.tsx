import { useState } from "react";

import iconCart from "../assets/icons/icon-cart.svg";
import iconClose from "../assets/icons/icon-close.svg";
import iconMenu from "../assets/icons/icon-menu.svg";
import imageAvatar from "../assets/images/image-avatar.png";
import logo from "../assets/images/logo.svg";

import styles from "./styles/Header.module.scss";

export default function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <header className={styles.header}>
      <button
        className={styles.btnMenu}
        aria-label="Open Navigation Menu"
        onClick={() => setIsNavOpen(true)}
      >
        <img src={iconMenu} alt="Hamburger menu icon" aria-hidden="true" />
      </button>

      <a
        className={styles.logo}
        href="/"
        aria-label="Sneaker Company Homepage Link"
      >
        <img className={styles.img} src={logo} alt="Sneaker Company Logo" />
      </a>

      <nav
        className={`${styles.nav} ${isNavOpen ? styles.navOpen : ""}`}
        aria-label="Main Navigation"
      >
        <ul className={styles.navList}>
          <li>
            <button
              className={styles.navBtnClose}
              aria-label="Close Navigation Menu"
              onClick={() => setIsNavOpen(false)}
            >
              <img src={iconClose} alt="Close icon" aria-hidden="true" />
            </button>
          </li>
          <li>
            <a className={styles.navLink} href="/collections">
              Collections
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="/men">
              Men
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="/women">
              Women
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="/about">
              About
            </a>
          </li>
          <li>
            <a className={styles.navLink} href="/contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className={styles.actions}>
        <button className={styles.btnCart} aria-label="Open Cart">
          <img src={iconCart} alt="Cart icon" aria-hidden="true" />
        </button>
        <button className={styles.btnAvatar} aria-label="Account Menu">
          <img src={imageAvatar} alt="Your account avatar" aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
