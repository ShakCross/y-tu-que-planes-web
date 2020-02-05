import React from 'react'
import styles from './hero-content.module.scss'
import Chip from 'components/general/chip/Chip'
import Button from 'components/general/button/Button'
import H1 from 'components/general/h1/H1'

const HeroContent = () => {
    return (
        <div className={styles.heading__wrapper}>
            <div className={styles.heading__inner_wrapper}>
                <Chip filled />
                <H1 title="SARCÓFAGOS DE KARAJÍA" />
                <span className={styles.span}>
                    Conoce el conjunto de tumbas antropomorfas de más de dos metros de alto al borde de un acantilado.
                </span>
                <Button title="Más Información" xclassname="slider_button"/>
            </div>
        </div>
    )
}

export default HeroContent
