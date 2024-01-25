import * as React from "react"

import build from "../../assets/error.jpeg"

import styles from "./Building.module.css"

const Building = () => {
    return(
        <img className={styles.building} src={build} alt="build"/>
    )
}

export default Building