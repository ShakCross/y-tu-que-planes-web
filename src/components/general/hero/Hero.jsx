import React from 'react'
import styles from './hero.module.scss'


const Hero = ({ className, image, alt, children }) => {
    return (
        <div className={className}>
            {children}
            <img className={styles.img} src={image} alt={alt} />
        </div>
    )
}

export default Hero