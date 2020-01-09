import React from 'react'
import styles from './card.module.scss'
import Chip from 'components/general/chip/Chip'


const Card = ({ shadow, image }) => {
    return (
        <div className={styles.wrapper} style={{ background: `url(${image}) center/cover no-repeat` }}>
            {shadow ? (
                <div className={styles.date}>

                </div>
            ) : ''}
            <div className={styles.data}>
                {shadow ? (
                    ''
                ) : <div className={styles.content}>
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
    shadow: ''
};

export default Card
