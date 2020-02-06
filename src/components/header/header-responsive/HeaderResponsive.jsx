import React from 'react'
import styles from './header-responsive.module.scss'

const HeaderResponsive = ({ xclassname }) => {
    return (
        <div className={`${styles.wrapper}  ${styles[xclassname]}`}>
            <div className={styles.inner_wrapper}>
                <a href="https://www.ytuqueplanes.com/ofertas">
                    <div className={styles.link}>
                        Ofertas
                    </div>
                </a>
                <a href="https://www.ytuqueplanes.com/destinos">
                    <div className={styles.link}>
                        Destinos
                    </div>
                </a>
                <a href="https://www.ytuqueplanes.com/rutas-cortas">
                    <div className={styles.link}>
                        Rutas Cortas
                    </div>
                </a>
                <a href="https://www.ytuqueplanes.com/novedades">
                    <div className={styles.link}>
                        Blog Viajero
                    </div>
                </a>
            </div>
        </div>
    )
}

export default HeaderResponsive
