import React from 'react'
import styles from './card.module.scss'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';


const Card = ({ image, location, title, slug, alt }) => {
    return (
        <Link to={slug}>
            <div
                className={styles.wrapper}
                style={{ backgroundImage: `url(${image})` }}
                role="img"
                alt={alt}
                aria-labelledby={alt}
            >
                <div className={styles.wrapper_chip}>
                    <div className={styles.chip}>
                        <FontAwesomeIcon className={styles.icon} icon={faMapMarkerAlt} />
                        {location}
                    </div>
                </div>
                <div className={styles.content}>
                    {title}
                </div>
            </div>
        </Link>
    )
}

Card.defaultProps = {
    image: 'https://www.ytuqueplanes.com/fotos/ofertas/piu_peru_norte_half_day.jpg.jpg',
    location: 'Lima',
    title: 'Tingana',
    url: '#',
    alt: 'turismo-tingana'
};

export default Card
