import React from 'react'
import styles from './hero.module.scss'
import HeroContent from 'components/general/hero-content/HeroContent'

const Hero = ({title, desc, image}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.shadow}></div>
            <HeroContent title={title} desc={desc} image={image} />
        </div>
    )
}

export default Hero
