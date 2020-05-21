import React from "react";
import styles from "./sub-menu-exp.module.scss";
import { Link } from "react-router-dom";
import fest from "assets/img/fiestas-uno.png";
import turi from "assets/img/turismo-uno.png";

const SubMenuExp = () => {
  return (
    <div className={styles.wrapper}>
      <a className={styles.items} href="https://www.ytuqueplanes.com/festividades" rel="noopener noreferrer">
        <img src={fest} />
        <span className={styles.span}>Festividades</span>
      </a>
      <hr className={styles.hr}/>
      <Link className={styles.items} to="/">
        <img src={turi} />
        <span className={styles.span}>Turismo Comunitario</span>
      </Link>
    </div>
  );
};

export default SubMenuExp;
