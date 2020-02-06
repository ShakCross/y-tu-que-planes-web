import React, { useState } from 'react'
import styles from './header.module.scss';
import Logo from 'assets/img/ytqp-2.png'
import NewsIcon from 'assets/img/news.png'
import BellIcon from 'assets/img/campana.svg'
import { faSearch, faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderResponsive from 'components/header/header-responsive/HeaderResponsive'
import HeaderBuscador from 'components/header/header-buscador/HeaderBuscador';
import HeaderNoticias from 'components/header/header-noticias/HeaderNoticias';

const Header = () => {

    const [toggle, setToggle] = useState(true);
    const handleToggle = () => setToggle(!toggle) & setSearch(true) & setNews(true)

    const [search, setSearch] = useState(true);
    const handleSearch = () => setSearch(!search) & setToggle(true) & setNews(true)

    const [news, setNews] = useState(true);
    const handleNews = () => setNews(!news) & setToggle(true) & setSearch(true)

    return (
        <>
            <nav className={styles.wrapper}>
                <div className={styles.logo}>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                        <img src={Logo} alt="" />
                    </a> 
                </div>
                <div className={styles.main}>
                    <div>
                        <a className={styles.main__link} href="https://www.ytuqueplanes.com/ofertas">Ofertas</a>
                    </div>
                    <div>
                        <a className={styles.main__link} href="https://www.ytuqueplanes.com/destinos">Destinos</a>
                    </div>
                    <div>
                        <a className={styles.main__link} href="https://www.ytuqueplanes.com/rutas-cortas">Rutas cortas</a>
                    </div>
                    <div>
                        <a className={styles.main__link} href="https://www.ytuqueplanes.com/novedades">Blog Viajero</a>
                    </div>
                </div>
                <div className={styles.icons}>
                    <div className={` ${news ? styles.newsIcon : styles.newsIconClicked} `}>
                        <img src={NewsIcon} alt="" onClick={handleNews}/>
                    </div>
                    <div className={` ${search ? styles.searchIcon : styles.searchIconClicked} `} onClick={handleSearch}>
                        <FontAwesomeIcon icon={faSearch} />
                    </div>
                    <div className={styles.bellContainer}>
                        <span className={styles.circle}>
                            <span className={styles.circle__tick}>2</span>
                        </span>
                        <img src={BellIcon} alt="" />
                    </div>
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
                <HeaderBuscador />
            )}
            {news ? (<HeaderNoticias xclassname="wrapper-none" />) : (
                <HeaderNoticias />
            )}
        </>

    )
}

export default Header
