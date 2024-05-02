import React from 'react';
import { Link } from 'react-router-dom'; 
import styles from './navbar.module.scss'; 

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarBrand}>Your App</div>
      <div className={styles.navbarLinks}>
        <Link to="/login" className={styles.navbarLink}>Login</Link>
        <Link to="/signup" className={styles.navbarLink}>Register</Link>
      </div>
    </nav>
  );
};

export default Navbar;
