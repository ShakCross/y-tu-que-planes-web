import React, { useState } from 'react'
import styles from './header.module.scss';
import Logo from 'assets/img/ytqp-2.webp'
import NewsIcon from 'assets/img/news.webp'
import BellIcon from 'assets/img/campana.svg'
import BellIconGrey from 'assets/img/campana-gris.svg'
import SearchIcon from 'assets/img/lupa.svg'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderResponsive from 'components/header/header-responsive/HeaderResponsive'
import HeaderBuscador from 'components/header/header-buscador/HeaderBuscador';
import HeaderNoticias from 'components/header/header-noticias/HeaderNoticias';
import HeaderNotificaciones from 'components/header/header-notificaciones/HeaderNotificaciones';
import { Link } from 'react-router-dom';


const Header = ({ empty, count }) => {

    const [toggle, setToggle] = useState(true);
    const handleToggle = () => setToggle(!toggle) & setSearch(true) & setNews(true) & setAlert(true)

    const [search, setSearch] = useState(true);
    const handleSearch = () => setSearch(!search) & setToggle(true) & setNews(true) & setAlert(true)

    const [news, setNews] = useState(true);
    const handleNews = () => setNews(!news) & setToggle(true) & setSearch(true) & setAlert(true)

    const [alert, setAlert] = useState(true);
    const handleAlert = () => setAlert(!alert) & setToggle(true) & setSearch(true) & setNews(true)

    return (
        <>
            <nav className={styles.wrapper}>
                <div className={styles.logo}>
                    <Link to="/">
                        <img src={Logo} alt="ytuqueplanes-logo" />
                    </Link>
                </div>
                <div className={styles.main}>
                    <div>
                        <a className={styles.main__link} href="https://www.ytuqueplanes.com/ofertas">Ofertas</a>
                    </div>
                    {/* <Link className={styles.main__link} to="/ofertas">
                        Ofertas
                    </Link> */}
                    <Link className={styles.main__link} to="/destinos">
                        Destinos
                    </Link>
                    {/* <Link className={styles.main__link} to="/rutas-cortas">
                        Rutas Cortas
                    </Link>
                    <Link className={styles.main__link} to="/blog-viajero">
                        Blog Viajero
                    </Link> */}
                    <div>
                        <a className={styles.main__link} href="https://www.ytuqueplanes.com/rutas-cortas">Rutas Cortas</a>
                    </div>
                    <div>
                        <a className={styles.main__link} href="https://www.ytuqueplanes.com/novedades">Blog Viajero</a>
                    </div>
                </div>
                <div className={styles.icons}>
                    {/* <div className={` ${news ? styles.newsIcon : styles.newsIconClicked} `}>
                        <img src={NewsIcon} alt="noticias-icon" onClick={handleNews} />
                    </div>
                    <div className={` ${search ? styles.searchIcon : styles.searchIconClicked} `} onClick={handleSearch}>
                        <img src={SearchIcon} alt="buscar-icon"/>
                    </div>
                    <div className={styles.bellContainer} onClick={handleAlert}>
                        <span className={`${empty ? styles.circle__none : styles.circle}`}>
                            <span className={styles.circle__tick}>{count}</span>
                        </span>
                        <img src={`${empty ? BellIconGrey : BellIcon}`} alt="alertas-icon" />
                    </div> */}
                    <div className={styles.hamburguer} onClick={handleToggle}>
                        {(toggle) ?
                            (<div className={styles.hamburguer__icon}><FontAwesomeIcon icon={faBars} /></div>)
                            :
                            (<div className={styles.times__icon}><FontAwesomeIcon className={styles.times} icon={faTimes} /></div>)
                        }
                    </div>
                </div>
            </nav>
            {toggle ? (<HeaderResponsive xclassname="wrapper-none" />) : (
                <HeaderResponsive />
            )}
            {search ? (<HeaderBuscador xclassname="wrapper-none" />) : (
                <HeaderBuscador clicked={handleSearch}/>
            )}
            {news ? (<HeaderNoticias xclassname="wrapper-none"/>) : (
                <HeaderNoticias clicked={handleNews}/>
            )}
            {alert ? (<HeaderNotificaciones xclassname="wrapper-none" />) : (
                <HeaderNotificaciones clicked={handleAlert}/>
            )}
        </>

    )
}

Header.defaultProps = {
    empty: false,
    count: '2'
};

export default Header
