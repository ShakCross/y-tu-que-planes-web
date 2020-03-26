import React from 'react'
import { withKnobs, text, number } from "@storybook/addon-knobs";
import styles from './newcard.module.scss'
import Card from './CardNew';

export default {
    title: 'Card',
    decorators: [withKnobs]
};

export const ShadowPrice = ({
    url = text("Url", "https://www.google.com/"),
    price = number("Precio", "90"),
    before = number("Precio Antes", "130"),
    duration = text("Duración", "Full day"),
    title = text("Título", "lorem ipsum dolor sit amet"),
    image = text("Imagen", "https://picsum.photos/400/400?random=1"),
    alt = text("Alt", "Alt-de-la-imagen")
}) => {

    return (
        <Card url={url}>
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
        </Card>
    )
}

export const SmallShadowPrice = ({
    url = text("Url", "https://www.google.com/"),
    price = number("Precio", "90"),
    before = number("Precio Antes", "130"),
    duration = text("Duración", "Full day"),
    title = text("Título", "lorem ipsum dolor sit amet"),
    image = text("Imagen", "https://picsum.photos/400/400?random=1"),
    alt = text("Alt", "Alt-de-la-imagen")
}) => {

    return (
        <Card url={url}>
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




