import React from 'react'
import styles from './plus-link.module.scss'

const PlusLink = ({ title }) => {
    return (
        <a className={styles.wrapper}>
            { title }
        </a>
    )
}

export default PlusLink
