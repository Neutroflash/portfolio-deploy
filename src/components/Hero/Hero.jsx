import * as React from "react";
import styles from "./Hero.module.css";

const Hero = () => {
    return (
        <div className={styles.hero} id="section2">
            <div className={styles.heroText}>
                <p>Hola Mundo!</p>
                <h1>Soy Miguel Lorenzo</h1>
                <p className={styles.heroPhrase}>Descubrir cosas nuevas es desentrañar los misterios infinitos de la vida</p>
                <p className={styles.neonText}>Full Stack Developer</p>
            </div>
        </div>
    );
};

export default Hero