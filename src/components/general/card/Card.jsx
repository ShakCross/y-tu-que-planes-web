import React from 'react'
import styles from './card.module.scss'
import Chip from 'components/general/chip/Chip'


const Card = ({ shadow, header, image, price, before, location, duration, title, url, alt }) => {
    return (
            <a href={url} target="_blank" rel="noopener noreferrer">
                {
                    header ?
                        (<div 
                            className={styles.header_wrapper} 
                            style={{ backgroundImage: `url(${image})` }}
                            role="img" 
                            alt={alt} 
                            aria-labelledby={alt}
                         >
                            <div className={styles.header_data}>
                                <div className={styles.content}>
                                    <div className={styles.wrapper__chip}>
                                        <Chip title={location} />
                                    </div>
                                    <div className={styles.wrapper__span}>
                                        <span className={styles.span}> {title} </span>
                                    </div>
                                </div>
                            </div>
                        </div>) :
                    shadow ?
                        (<div 
                            className={styles.wrapper_full} 
                            style={{ backgroundImage: `url(${image})` }}                            
                            role="img"
                            alt={alt} 
                            aria-labelledby={alt}
                        >
                            <div className={styles.date}>
                                <div className={styles.date__wrapper}>
                                    <span className={styles.date__price}>
                                        S/. {price}
                                    </span>
                                    <span className={styles.date__discount}>
                                        Antes S/. {before}
                                    </span>
                                </div>
                            </div>
                            <div className={styles.header_data}>
                                <div className={styles.gradient}>
                                    <div className={styles.text__wrapper}>
                                        <span className={styles.text_title}>
                                            {duration}
                                        </span>
                                        <span className={styles.text_content}>
                                            {title}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>) :
                        (<div 
                            className={styles.wrapper} 
                            style={{ backgroundImage: `url(${image})` }} 
                            role="img" 
                            alt={alt} 
                            aria-labelledby={alt}
                         >
                            <div className={styles.header_data}>
                                <div className={styles.content}>
                                    <div className={styles.wrapper__chip}>
                                        <Chip title={location} />
                                    </div>
                                    <div className={styles.wrapper__span}>
                                        <span className={styles.span}> {title} </span>
                                    </div>
                                </div>
                            </div>
                        </div>)
                }
            </a>

    )
}

Card.defaultProps = {
    shadow: false,
    header: false,
    image: '',
    price: '99', 
    before: '130', 
    location: 'Amazonas', 
    duration: 'Full Day', 
    title: 'Déjate tentar por el sabor del cuy moqueguano',
    url: '#'
};

export default Card
