import React from 'react'
import styles from './card.module.scss'

const Card = ({ url, price, before, duration, title, image, alt }) => {
    return (
        <a href={url}>
            <div className={styles.wrapper}>
                <div className={styles.top_data}>
                    <div className={styles.price_wrapper}>
                        <span className={styles.price}>
                            S/. {price}
                        </span>
                        <span className={styles.price_discount}>
                            Antes S/. {before}
                        </span>
                    </div>
                </div>
                <div className={styles.bottom_data}>
                    <div className={styles.gradient}>
                        <div className={styles.text_wrapper}>
                            <span className={styles.text_duration}>
                                {duration}
                            </span>
                            <span className={styles.text_title}>
                                {title}
                            </span>
                        </div>
                    </div>
                </div>
                <img className={styles.img} src={image} alt={alt} />
            </div>
        </a>
    )
}

Card.defaultProps = {
    url: 'google.com',
    price: '299',
    before: '335',
    duration: 'Full day',
    title: 'lorem ipsum dolor sit amet',
    image: 'https://picsum.photos/200/300?random=1',
    alt: 'the_alt'
};

export default Card