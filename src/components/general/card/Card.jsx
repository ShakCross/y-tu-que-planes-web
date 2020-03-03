import React from 'react'
import styles from './card.module.scss'
import Chip from 'components/general/chip/Chip'
import Rating from 'components/general/rating/Rating'


const Card = ({ shadow, header, image, price, before, location, duration, title, url, stars, date, alt }) => {
    return (
        <a className={styles.a} href={url} target="_blank" rel="noopener noreferrer">
            {
                header ?
                    (<div className={styles.header_wrapper}>
                        <img className={styles.imgHeader} src={image} alt={alt} />
                        <div className={styles.header_data_header}>
                            <div className={styles.content}>
                                <div className={styles.wrapper_rating}>
                                    <Rating stars={stars} />
                                </div>
                                <div className={styles.header_wrapper_span}>
                                    <span className={styles.header_span}> {title} </span>
                                </div>
                                <div className={styles.header_wrapper_date}>
                                    <span> {date} </span>
                                </div>
                            </div>
                        </div>
                    </div>) :
                    shadow ?
                        (<div className={styles.wrapper_full}>
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
                            <img className={styles.imgShadow} src={image} alt={alt} />
                        </div>) :
                        (<div className={styles.wrapper}>
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
                            <img className={styles.img} src={image} alt={alt} />
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
    url: '#',
    number: '4',
    date: '10 noviembre, 2019',
    alt: 'imageAlt'
};

export default Card
