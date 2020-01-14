import React from 'react'
import styles from './card.module.scss'
import Chip from 'components/general/chip/Chip'


const Card = ({ shadow, image }) => {
    return (
        <div className={styles.wrapper} style={{ background: `url(${image}) center/cover no-repeat` }}>
            {shadow ? (
                <div className={styles.date}>
                    <div className={styles.date__wrapper}>
                        <span className={styles.date__price}>
                            S/ 99
                        </span>
                        <span className={styles.date__discount}>
                            Antes S/ 130
                        </span>
                    </div>
                </div>
            ) : 
            ''}
            <div className={styles.data}>
                {shadow ? (
                    <div className={styles.gradient}>
                        <div className={styles.text__wrapper}>
                            <span className={styles.text_title}>
                                Full Day
                            </span>
                            <span className={styles.text_content}>
                                Trek bosque cataratas gigantes cuispes
                            </span>
                        </div>
                    </div>
                ) : 
                <div className={styles.content}>
                        <div className={styles.wrapper__chip}>
                            <Chip />
                        </div>
                        <div className={styles.wrapper__span}>
                            <a href="#"><span className={styles.span}>Déjate tentar por el sabor del cuy moqueguano</span></a>
                        </div>
                    </div>}
            </div>
        </div>
    )
}

Card.defaultProps = {
    shadow: '',
    image: ''
};

export default Card
