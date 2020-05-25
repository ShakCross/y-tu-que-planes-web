import React from 'react'
import styles from './plus-link.module.scss'

const PlusLink = ({ lenght, none, url }) => {
    return (
        <a href={url} className={`${none ? styles.wrapper_none  : styles.wrapper }`} target="_blank" rel="noopener noreferrer">
            {`${"+ actividades"}`}
        </a>
    )
}

PlusLink.defaultProps = {
    lenght: '',
    none: false,
    url: 'https://www.ytuqueplanes.com/festividades'
};


export default PlusLink
