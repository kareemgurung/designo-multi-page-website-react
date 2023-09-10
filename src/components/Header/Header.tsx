import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./header.module.scss";

const Header = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick((prevState) => !prevState);

  const closeMenu = () => setClick(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" onClick={closeMenu}>
          <img
            src="/assets/shared/desktop/logo-dark.png"
            alt="Designo"
            width={197}
            height={27}
          />
        </Link>
        <button onClick={handleClick}>
          {click ? (
            <img src="/assets/shared/mobile/icon-close.svg" alt="" />
          ) : (
            <img src="/assets/shared/mobile/icon-hamburger.svg" alt="" />
          )}
        </button>
        <ul className={click ? `${styles.menu} ${styles.active}` : styles.menu}>
          <li>
            <Link to="/about" onClick={closeMenu}>
              Our company
            </Link>
          </li>
          <li>
            <Link to="/locations" onClick={closeMenu}>
              Locations
            </Link>
          </li>
          <li>
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div
        className={
          click
            ? `${styles.backdrop} ${styles.backdropActive}`
            : styles.backdrop
        }
      ></div>
    </header>
  );
};

export default Header;
