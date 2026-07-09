import styles from "./Loader.module.css";
import logo from "../assets/banner1.png";
import { memo } from "react";

function Loader() {
  return (
    <div className={styles.loaderPage}>
      <img src={logo} alt="TechMart" className={styles.logo} />
      <div className={styles.spinner}></div>
      <p>Loading...</p>
    </div>
  );
}

export default memo(Loader);
