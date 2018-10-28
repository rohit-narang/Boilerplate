import React from 'react';
import styles from './Header.css';

 const Header = () => {
    return (
        <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles['site-title']}>
        </h1>
    
      </div>
    </div>
    )
};

export default Header;