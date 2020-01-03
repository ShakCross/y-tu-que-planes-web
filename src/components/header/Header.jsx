import React from 'react'
import styles from './header.module.scss';
import Logo from 'assets/img/ytqp-2.png'
import NewsIcon from 'assets/img/news.svg'
import BellIcon from 'assets/img/campana.svg'
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
    return (
        <nav className={styles.wrapper}>
            <div className={styles.logo}>
                <img src={Logo} alt="" />
            </div>
            <div className={styles.main}>
                <div>
                    <a className={styles.main__link} href="">Ofertas</a>
                </div>
                <div>
                    <a className={styles.main__link} href="">Destinos</a>
                </div>
                <div>
                    <a className={styles.main__link} href="">Rutas cortas</a>
                </div>
                <div>
                    <a className={styles.main__link} href="">Blog Viajero</a>
                </div>
            </div>
            <div className={styles.icons}>
                <div>
                    <img src={NewsIcon} alt="" />
                </div>
                <div className={styles.searchIcon}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                <div className={styles.bellContainer}>
                    <span className={styles.circle}>
                        <span className={styles.circle__tick}>2</span>
                    </span>
                    <img src={BellIcon} alt="" />
                </div>
                <div className={styles.hamburguer}>
                    <div className={styles.hamburguer__icon}>
                        <FontAwesomeIcon icon={faBars} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header
