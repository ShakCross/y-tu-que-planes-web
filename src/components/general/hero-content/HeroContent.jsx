import React from 'react'
import styles from './hero-content.module.scss'
import Chip from 'components/general/chip/Chip'
import Button from 'components/general/button/Button'
import H1 from 'components/general/h1/H1'

const HeroContent = ({desc, title, chip, url}) => {
    return (
        <a className={styles.heading__wrapper} href={url}>
            <div className={styles.heading__inner_wrapper}>
                <Chip filled title={chip}/>
                <H1 title={title} />
                <span className={styles.span}>
                    {desc}
                </span>
                <Button action title="Más Información" xclassname="slider_button"/>
            </div>
        </a>
    )
}

export default HeroContent
