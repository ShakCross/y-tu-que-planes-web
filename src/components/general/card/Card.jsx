import React from 'react'
import styles from './card.module.scss'
import Chip from 'components/general/chip/Chip'
import Rating from 'components/general/rating/Rating'
import Button from 'components/general/button/Button'


const Card = ({ shadow, header, destinos, image, price, before, location, duration, title, url, stars, date, alt }) => {
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
                            <div className={styles.ofertas_santa_data}>
                                <div className={styles.gradient}>
                                    <div className={styles.text__wrapper}>
                                        <span className={styles.text_content}>
                                            {title}
                                        </span>
                                        <span className={styles.text_title}>
                                            {duration}
                                        </span>
                                        <Button darkyellow title="¿Qué incluye?" xclassname="ofertas_santa_wrapper" />
                                    </div>
                                </div>
                            </div>
                            <img className={styles.imgShadow} src={image} alt={alt} />
                        </div>) :
                        destinos ?
                            (<div className={styles.wrapper_destinos_santa}>
                                <div className className={styles.wrapper_destinos_head_santa}>
                                    <div className={styles.wrapper__chip}>
                                        <Chip color="white" title={location} />
                                    </div>
                                </div>
                                <div className={styles.ofertas_santa_data}>
                                    <div className={styles.gradient}>
                                        <div className={styles.text_wrapper_destinos_santa}>
                                            <span className={styles.text_content_destinos_santa}>
                                                {title}
                                            </span>
                                            <div className={styles.link_content}>
                                                [+] Ver programa
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <img className={styles.imgShadow} src={image} alt={alt} />
                            </div>) :
                            (<div className={styles.wrapper}>
                                <div className={styles.blog_santa_inner_wrapper}>
                                    <div className={styles.blog_santa_data}>
                                        <div className={styles.blog_santa_title}>
                                            {title}
                                        </div>
                                        <div className={styles.blog_santa_content}>
                                            Quisque quis semper dui, ut tempus tellus. Morbi dignissim, felis ut pulvinar pulvinar, mauris felis vehicula velit, at dictum orci mauris in enim.
                                        </div>
                                        <div className={styles.blog_santa_link}>
                                            Ver más
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
    destinos: false,
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
