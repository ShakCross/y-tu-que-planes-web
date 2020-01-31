import React from 'react'
import styles from './header-buscador.module.scss'

const HeaderBuscador = ({ xclassname }) => {
    return (
        <>
            <div className={`${styles.wrapper}  ${styles[xclassname]}`}>
                <div className={styles.inner__wrapper}>
                    
                </div>
            </div>
            <div className={`${styles.background}  ${styles[xclassname]}`}></div>
        </>
    )
}

export default HeaderBuscador
