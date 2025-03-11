import React from 'react';
import styles from './Header.module.css';
import arrow from '../../assets/icons/arrow-up-right.svg';


const Header = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
      <img src="/rotar.svg" alt="Logo" />
        <span className={styles.logoText}>Rotar AI</span>
      </div>
      <div className={styles.menu}>
        <span>Product</span>
        <span>Solutions</span>
        <span>Resources</span>
        <span>Pricing</span>
      </div>
      <div className={styles.groupButton}>
        <span>ES | EN</span>
        <button className={styles.demoButton}>
          Book a demo
          <img src={arrow} alt="Arrow" />
        </button>
      </div>
    </nav>
  );
};

export { Header };
