import React from 'react'
import styles from './modal-viaja.module.scss'
import popUp from 'assets/img/pop_up.png'
import popUpMobile from 'assets/img/pop_up_mobile.png'

const ModalViaja = () => {
    return (
        <a className={styles.wrapper} href="./src/assets/img/viaja-seguro.jpg" target="_blank" rel="noopener noreferrer">
            <img className={styles.img} src={popUp} alt="viaja-informado" />
            <img className={styles.imgobile} src={popUpMobile} alt="viaja-informado" />
        </a>
    )
}

export default ModalViaja
