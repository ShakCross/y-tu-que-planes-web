import React from 'react'
import styles from 'components/home/parallax.module.scss'
import ico1 from 'assets/img/turismo-seguro.png'
import H4 from 'components/general/h4/H4'

const Parallax = () => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.ico_big}>
                <img src={ico1} alt="" />
            </div>
            <div className={styles.h4}>
                <H4 title="Dile sí a lo formal y vive el turismo seguro por el Perú"/>
            </div>
        </section>
    )
}

export default Parallax
