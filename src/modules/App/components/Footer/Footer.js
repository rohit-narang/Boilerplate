import React from 'react';

//Add style
import styles from './Footer.css';

export function Footer () {
    return(
    <div style={{ background: `#FFF center` }} className={styles.footer}>
      <p>&copy; 2018 &middot; Contour &middot; </p>
      <p>This Boilerplate architecture by Rohit Narang</p>
    </div>
    )
}

export default Footer;