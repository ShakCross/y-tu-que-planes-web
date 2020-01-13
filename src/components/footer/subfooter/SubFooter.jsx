import React from 'react'
import styles from './subfooter.module.scss'

const SubFooter = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner__wrapper}>
                <div className={styles.links}>
                    <h6 className={styles.h6}>
                        <a className={styles.h6__a} target="_blank" rel="noopener noreferrer" href="https://www.ytuqueplanes.com/terminos-condiciones.aspx">Mapa de Sitio</a></h6>
                </div>
                <div className={styles.links}>
                    <h6 className={styles.h6}>
                        <a className={styles.h6__a} href="/" rel="noopener noreferrer">Aviso Legal</a></h6>
                </div>

                <div className={styles.links}>
                    <h6 className={styles.h6}>
                        <a className={styles.h6__a} target="_blank" rel="noopener noreferrer" href="https://www.ytuqueplanes.com/terminos-condiciones.aspx">Términos y Condiciones</a></h6>
                </div>
                <div className={styles.copyright}>
                    <h6 className={styles.rights}>Todos los Derechos Reservados,<span className={styles.h6}> Ytuqueplanes {(new Date().getFullYear())}</span></h6>
                </div>
            </div>
        </div>
    )
}

export default SubFooter
