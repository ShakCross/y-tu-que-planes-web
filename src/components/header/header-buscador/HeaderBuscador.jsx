import React from 'react'
import styles from './header-buscador.module.scss'

const HeaderBuscador = ({ xclassname, clicked }) => {
    return (
        <>
            <div className={`${styles.wrapper}  ${styles[xclassname]}`}>
                <div className={styles.inner__wrapper}>
                    <div className={styles.content_wrapper}>
                        <div className={styles.title}>
                            ¿Qué estás buscando?
                        </div>
                        <hr className={styles.hr} />
                        <div className={styles.content}>
                            Lugares más visitados
                        </div>
                        <div className={styles.content}>
                            Mejores playas del norte
                        </div>
                        <div className={styles.content}>
                            Los mejores platos
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${styles.background}  ${styles[xclassname]}`} onClick={clicked}></div>
        </>
    )
}

export default HeaderBuscador
