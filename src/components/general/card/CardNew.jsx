import React from 'react'
import styles from './card.module.scss'



const Card = ({ children, shadow, header, image, price, before, location, duration, title, url, stars, date, alt }) => {
    return (
        <a className={styles.a} href={url} target="_blank" rel="noopener noreferrer">
            {children}
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
