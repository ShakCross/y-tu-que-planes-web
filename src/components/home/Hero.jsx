import React from 'react'
import styles from './hero.module.scss'
import MainSlider from 'components/general/main-slider/MainSlider'

const Hero = () => {
    return (
        <div className={styles.wrapper}>
            <MainSlider/>
        </div>
    )
}

export default Hero
