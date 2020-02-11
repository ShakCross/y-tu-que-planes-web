import React from 'react'
import styles from './header-notificaciones.module.scss'
import Alert from 'components/header/header-notificaciones/alert/Alert';

const HeaderNotificaciones = ({ xclassname }) => {
    return (
        <>
            <div className={`${styles.wrapper}  ${styles[xclassname]}`}>
                <div className={styles.inner__wrapper}>
                    <div className={styles.date_wrapper}>
                        <div className={styles.date}>Última publicación: 13 de Noviembre 2019</div>
                        <div className={styles.date}>ALERTAS</div>
                    </div>
                    <div className={styles.content_wrapper}>
                        <div className={styles.head}>
                            <div className={styles.chip}>
                                Nuevo
                            </div>
                            <div className={styles.title}>
                                Telecabinas Kueláp
                            </div>
                        </div>
                        <div className={styles.alert_wrapper}>
                            <Alert />
                            <Alert />
                            <Alert />
                            <Alert />
                            <Alert />
                        </div>
                    </div>
                    <a href="#" target="_blank" rel="noopener noreferrer" className={styles.holiday_wrapper}>
                        Feriados 2020 >
                    </a>
                    <a href="#" target="_blank" rel="noopener noreferrer" className={styles.see_more_wrapper}>
                        Ver todas las notificaciones
                    </a>
                </div>
            </div>
            <div className={`${styles.background}  ${styles[xclassname]}`}></div>
        </>
    )
}

export default HeaderNotificaciones
