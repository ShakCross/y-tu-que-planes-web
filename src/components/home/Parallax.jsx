import React from 'react'
import styles from 'components/home/parallax.module.scss'
import ico1 from 'assets/img/turismo-seguro.png'
import ico2 from 'assets/img/ico-1-desk.png'
import ico3 from 'assets/img/ico-2-desk.png'
import ico4 from 'assets/img/ico-3-desk.png'

const Parallax = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.ico_big}>
                <img src={ico1} alt=""/>
            </div>
            <div className={styles.ico}>
                <img src={ico2} alt=""/>
            </div>
            <div className={styles.ico}>
                <img src={ico3} alt=""/>
            </div>
            <div className={styles.ico}>
                <img src={ico4} alt=""/>
            </div>
        </section>
    )
}

export default Parallax
