import React from 'react'
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import styles from './newbutton.module.scss'
import Button from './ButtonNew';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default {
    title: 'Button',
    decorators: [withKnobs]
};

export const Mini = ({
    children = text("Texto", "Ver más")
}) => {
    return (
        <Button yellow xclassname="button_mini">
            {children}
        </Button>
    )
}

export const OfertasSingleGreenButton = () => {
    return (
        <Button className={styles.ofertas_single_green} children="Me interesa" />
    )
}

export const BlogFilter = ({ onClick, icon, content, green, yellow }) => {
    return (
        <Button className={yellow ? styles.blog_filter_notas : green ? styles.blog_filter_video : ''} action onClick={onClick}>
            <FontAwesomeIcon className={styles.icon} icon={icon} />
            <span>{content}</span>
        </Button>
    )
}
