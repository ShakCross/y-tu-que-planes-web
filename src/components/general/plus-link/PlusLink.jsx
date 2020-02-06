import React from 'react'
import styles from './plus-link.module.scss'

const PlusLink = ({ lenght, none, url }) => {
    return (
        <a href={url} className={`${none ? styles.wrapper_none  : styles.wrapper }`} target="_blank" rel="noopener noreferrer">
            {`${"+ "} ${lenght} ${" actividad(es)"}`}
        </a>
    )
}

PlusLink.defaultProps = {
    lenght: '5',
    none: false,
    url: '#'
};


export default PlusLink
