import React from 'react'
import styles from './hero.module.scss'
import HeroContent from 'components/general/hero-content/HeroContent'

const Hero = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.shadow}></div>
            <HeroContent/>
        </div>
    )
}

export default Hero
