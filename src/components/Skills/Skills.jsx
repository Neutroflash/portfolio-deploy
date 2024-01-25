import * as React from "react";
import styles from "./Skills.module.css";

import images from "../../../images.json";

const Skills = () => {
  return (
    <div className={styles.skills} id="section4">
      <h1>Conocimientos</h1>
      <div className={styles.skillsLogos}>
        {images.map((item) => (
          <div key={item.id} className={styles.logoContainer}>
            <img
              src={item.image}
              alt={`Logo ${item.id}`}
              className={styles.logo}
            />
            <p className={styles.logoText}>{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
