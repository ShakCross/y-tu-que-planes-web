import React from 'react'
import styles from './modal.module.scss'
import cancel from 'assets/img/cancel-modal.svg'

const Modal = ({children, click}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.img_wrapper}>
                <img className={styles.img} onClick={click} src={cancel} alt="" srcSet=""/>
            </div>
            {children}
        </div>
    )
}

export default Modal
