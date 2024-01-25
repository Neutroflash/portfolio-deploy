import * as React from "react"
import styles from "./About.module.css"

const About = () => {
    return (
        <div className={styles.about} id ="section3">
            <div className={styles.aboutText}>
                <h1>Acerca de mi</h1>
                <p>¡Hola! Soy Miguel Lorenzo, un apasionado del mundo de la tecnología desde temprana edad. Mi fascinación comenzó a los 5 años cuando recibí mi primera PC con Windows XP, marcando el inicio de mi viaje en este emocionante campo. A los 12 años, sin saberlo, ya estaba inmerso en la programación con Scratch, y más adelante, desafiándome a desarrollar un servidor de Minecraft en Java, incluso antes de comprender por completo qué era Java y Bukkit.</p>
                <p>Mi trayectoria académica se enfocó en la ingeniería de software durante mis años universitarios, donde desarrollé aplicaciones de consola en C++. Sin embargo, mi verdadero redescubrimiento ocurrió al sumergirme en el fascinante mundo del desarrollo web. Mi enfoque se centró en el front end, donde disfrutaba plasmar diseños en código, fusionando creatividad y funcionalidad.</p>
                <p>El siguiente capítulo en mi camino fue la participación en Codeable, un bootcamp de programación Full Stack. Esta experiencia intensiva me permitió explorar nuevos campos y adquirir habilidades que nunca había imaginado. Como egresado de Codeable, me convertí en un Full Stack developer, potenciando y consolidando todos mis conocimientos.</p>
                <p>En mí encontrarás no solo habilidades técnicas, sino también una inquebrantable voluntad de aprender y mejorar constantemente. Mi motivación se refleja en cada línea de código que escribo y en cada proyecto en el que me embarco. Estoy emocionado por la oportunidad de unirme a tu equipo, contribuir con mi experiencia y seguir creciendo juntos en este apasionante mundo tecnológico. ¡Hagamos cosas increíbles juntos!</p>
            </div>
        </div>
    )
}

export default About