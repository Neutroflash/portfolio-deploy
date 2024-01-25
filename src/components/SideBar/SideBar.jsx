import * as React from "react";
import styles from "./SideBar.module.css";
import data from "../../../data.json";
import * as IoIcons from "react-icons/io";
import { RxSwitch } from "react-icons/rx";

const style = { color: "rgba(255, 255, 255, 0.8)", fontSize: "1.2em" };

const SideBar = () => {
  const [initial, setInitial] = React.useState(true);

  const toggleSideBar = () => {
    console.log("click en el boton");
    setInitial(!initial);
  };

  const scrollToSection = (sectionId, direction) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const scrollOptions = {
        behavior: "smooth",
        block: direction === "up" ? "end" : "start",
      };

      element.scrollIntoView(scrollOptions);
    }
  };

  return (
    <div className={`${styles.sideBar} ${initial ? styles.open : ""}`}>
      {initial && (
        <ul className={styles.sideBar_list}>
          {data.map((item) => (
            <li
              key={item.id}
              className={styles.sideBar_item}
              onClick={() => {
                if (item.id === 1) {
                  window.open(item.link, "_blank");
                } else {
                  const direction = item.id === 2 ? "down" : "up";
                  scrollToSection(`section${item.id}`, direction);
                }
              }}
            >
              {item.id === 0 ? (
                <img src={item.image} alt={item.id} className={styles.myPhoto} />
              ) : (
                item.id === 7 ? (
                  <button className={styles.sideBar_switch} onClick={toggleSideBar}>
                    <RxSwitch />
                  </button>
                ) : (
                  <a
                    href={item.id === 1 ? item.link : `#${item.id === 2 ? "" : "section"}${item.id}`}
                    className={styles.sideBar_link}
                    target={item.id === 1 ? "_blank" : ""}
                    onClick={(e) => {
                      if (item.id !== 1) {
                        e.preventDefault();
                      }
                    }}
                  >
                    {React.createElement(IoIcons[item.icon], { style: style })}
                    <p>{item.text}</p>
                  </a>
                )
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideBar;
