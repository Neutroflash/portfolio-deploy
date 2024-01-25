import * as React from "react";
import SideBar from "../SideBar/SideBar";
import Hero from "../Hero/Hero";
import About from "../About/About";
import Skills from "../Skills";
import Footer from "../Footer";
import Projects from "../Projects";
import styles from "./App.module.css";

import { Fade } from "react-awesome-reveal";

function App() {
  return (
    <div id="root" className={styles.root}>
      <SideBar />
      <div className={styles.myInfo}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Footer />
      </div>
    </div>
  );
}

export default App;
