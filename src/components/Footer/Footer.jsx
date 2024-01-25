import * as React from "react";
import styles from "./Footer.module.css";

import logos from "../../../contact.json";

const Footer = () => {
  return (
    <div className={styles.footer} id="section6">
      <h1>CONTÁCTAME</h1>
      <div className={styles.footerItems}>
        {logos.map((item) => (
          <div key={item.id} className={styles.footerContainer}>
            <a href={item.link} target="_blank">
              <img
                src={item.image}
                alt={`Logo ${item.id}`}
                className={styles.logoFooter}
              />
              <p>{item.text}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;