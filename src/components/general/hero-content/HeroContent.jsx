import React from "react";
import styles from './hero-content.module.scss'
import slide from 'assets/img/slider.jpeg'


const HeroContent = () => {

    return (
        <div>
            <div className={styles.wrapper}>
                <div className={styles.heading__wrapper}>
                    <div className={styles.heading__inner_wrapper}>
                        <h1 className={styles.h1} >
                            Turismo Comunitario
                        </h1>
                        <span className={styles.span}>
                            Un Perú no solo debes conocerlo sino también vivirlo, recorriendo paisajes naturales que son capaces de hablar por si solos
                        </span>
                    </div>
                </div>
                <img className={styles.slides} src={slide} alt="" />
            </div>
        </div>
    )
}

export default HeroContent