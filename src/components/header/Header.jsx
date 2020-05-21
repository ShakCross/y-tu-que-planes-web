import React, { useState } from "react";
import Logo from "assets/img/ytqp-logo.png";
import Alert from "assets/img/alert_top.png";
import User from "assets/img/user.png";
import Search from "assets/img/search.png";
import styles from "./header.module.scss";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import SubMenuExp from "./sub-menu-exp/SubMenuExp";

const Header = () => {
  const [toggle, setToggle] = useState(true);
  const handleToggle = () => setToggle(!toggle);

  const [subMenuToggle, setSubMenuToggle] = useState(false);
  const handleSubMenuToggle = () => setSubMenuToggle(!subMenuToggle);

  return (
    <div>
      <div className={styles.header_container}>
        <div className={styles.header_row}>
          <nav className={styles.header_nav}>
            <div className={styles.menu_item}>
              <a
                href="https://www.ytuqueplanes.com/destinos"
                rel="noopener noreferrer"
              >
                Destinos
              </a>
            </div>
            <div className={styles.menu_item}>
              <a
                href="https://www.ytuqueplanes.com/ofertas"
                rel="noopener noreferrer"
              >
                Ofertas
              </a>
            </div>
            <div className={styles.menu_item} onClick={handleSubMenuToggle}>
              <div>Experiencias</div>
              {subMenuToggle ? <SubMenuExp /> : ""}
            </div>
            <div className={styles.menu_logo}>
              <a href="https://www.ytuqueplanes.com/" rel="noopener noreferrer">
                <img alt="Logo-Ytuqueplanes" src={Logo} />
              </a>
            </div>
            <div className={styles.menu_item}>
              <a
                href="https://www.ytuqueplanes.com/rutas-cortas"
                rel="noopener noreferrer"
              >
                Rutas Cortas
              </a>
            </div>
            <div className={styles.menu_item}>
              <a
                href="https://www.ytuqueplanes.com/novedades"
                rel="noopener noreferrer"
              >
                Guía Viajera
              </a>
            </div>
            <div
              style={{ cursor: "not-allowed" }}
              className={styles.menu_item_icons}
            >
              <img
                className={styles.header_icon_bg}
                src={Alert}
                alt="icono-alerta"
              />
              <img src={User} alt="icono-usuario" />
              <img className={styles.search} src={Search} alt="icono-buscar" />
            </div>
            <div className={styles.menu_responsive}>
              {/* <a href="/">
                                <img src={Alert} alt="icono-alerta" />
                            </a>
                            <a href="/">
                                <img src={Search} alt="icono-buscar" />
                            </a> */}
              <a className={styles.hidden_collapse} onClick={handleToggle}>
                <FontAwesomeIcon className={styles.bars} icon={faBars} />
              </a>
            </div>
          </nav>
          {toggle ? (
            ""
          ) : (
            <div className={styles.toggle_menu}>
              <div className={styles.menu_item_mobile}>
                <a
                  rel="noopener noreferrer"
                  href="https://www.ytuqueplanes.com/destinos"
                >
                  Destinos
                </a>
              </div>
              <div className={styles.menu_item_mobile}>
                <a
                  rel="noopener noreferrer"
                  href="https://www.ytuqueplanes.com/ofertas"
                >
                  Ofertas
                </a>
              </div>
              <div className={styles.menu_item_mobile}>
                {/* <Link to="/">Experiencias</Link> */}
                <div onClick={handleSubMenuToggle}>Experiencias</div>
                {subMenuToggle ? <SubMenuExp /> : ""}
              </div>
              <div className={styles.menu_item_mobile}>
                <a
                  rel="noopener noreferrer"
                  href="https://www.ytuqueplanes.com/rutas-cortas"
                >
                  Rutas Cortas
                </a>
              </div>
              <div className={styles.menu_item_mobile}>
                <a
                  rel="noopener noreferrer"
                  href="https://www.ytuqueplanes.com/novedades"
                >
                  Guía Viajera
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
