import React from 'react'
import styles from './plus-link.module.scss'

const PlusLink = ({ lenght, none }) => {
    return (
        <a className={`${none ? styles.wrapper_none  : styles.wrapper }`}>
            {`${"+ "} ${lenght} ${" actividad(es)"}`}
        </a>
    )
}

PlusLink.defaultProps = {
    lenght: '5',
};


export default PlusLink
