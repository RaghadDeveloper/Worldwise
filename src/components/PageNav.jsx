import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./PageNav.module.css";
import Logo from "./Logo";

function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">profuct</NavLink>
        </li>
        <li>
          <NavLink to="/login" className={styles.ctaLink}>
            LogIn
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
