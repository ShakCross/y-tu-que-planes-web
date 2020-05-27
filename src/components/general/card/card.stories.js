import React from 'react'
import { withKnobs, text, number } from "@storybook/addon-knobs";
import styles from './newcard.module.scss'
import Card from './CardNew';
import Chip from 'components/general/chip/Chip'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default {
    title: 'Card',
    decorators: [withKnobs]
};

export const ShadowPrice = ({
    slug = text("Slug", "https://www.google.com/"),
    price = number("Precio", "90"),
    before = number("Precio Antes", "130"),
    duration = text("Duración", "Full day"),
    title = text("Título", "lorem ipsum dolor sit amet"),
    image = text("Imagen", "https://picsum.photos/400/400?random=1"),
    alt = text("Alt", "Alt-de-la-imagen")
}) => {

    return (
        <Card to={slug}>
            <div className={styles.wrapper_shadow}>
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
        </Card>
    )
}

export const SmallShadowPrice = ({
    slug = text("Slug", "https://www.google.com/"),
    price = number("Precio", "90"),
    before = number("Precio Antes", "130"),
    duration = text("Duración", "Full day"),
    title = text("Título", "lorem ipsum dolor sit amet"),
    image = text("Imagen", "https://picsum.photos/400/400?random=1"),
    alt = text("Alt", "Alt-de-la-imagen")
}) => {

    return (
        <Card to={slug}>
            <div className={styles.wrapper_sm}>
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
        </Card>
    )
}

export const CardDefaultLg = ({
    province = text("Provincia", "Moquegua"),
    title = text("Título", "Trekking en z - El Baúl de Antonia"),
    image = text("Imagen", "https://picsum.photos/400/400?random=1"),
    alt = text("Alt", "el-baul-de-antonia"),
    likes = number("Likes", "130"),
    slug = text("Slug", "slug")
}) => {

    return (
        <Card to={slug}>
            <div className={styles.wrapper_default_lg}>
                <div className={styles.header_data_blog}>
                    <div className={styles.content_blog}>
                        <div className={styles.wrapper_chip_blog}>
                            <Chip title={province} />
                            <div className={styles.likes_blog}>
                                <FontAwesomeIcon className={styles.icon_blog} icon={faHeart} />
                                <span>{likes}</span>
                            </div>
                        </div>
                        <div className={styles.wrapper_span_blog}>
                            <span className={styles.span_blog}> {title} </span>
                        </div>
                    </div>
                </div>
                <img className={styles.img_blog} src={image} alt={alt} />
            </div>
        </Card>
    )
}

export const CardDefault = ({
    province = text("Provincia", "Moquegua"),
    title = text("Título", "Trekking en z - El Baúl de Antonia"),
    image = text("Imagen", "https://picsum.photos/400/400?random=1"),
    alt = text("Alt", "el-baul-de-antonia"),
    likes = number("Likes", "130"),
    slug = text("Slug", "slug")
}) => {

    return (
        <Card to={slug}>
            <div className={styles.wrapper_default}>
                <div className={styles.header_data_blog}>
                    <div className={styles.content_blog}>
                        <div className={styles.wrapper_chip_blog}>
                            <Chip title={province} />
                            <div className={styles.likes_blog}>
                                <FontAwesomeIcon className={styles.icon_blog} icon={faHeart} />
                                <span>{likes}</span>
                            </div>
                        </div>
                        <div className={styles.wrapper_span_blog}>
                            <span className={styles.span_blog}> {title} </span>
                        </div>
                    </div>
                </div>
                <img className={styles.img_blog} src={image} alt={alt} />
            </div>
        </Card>
    )
}



