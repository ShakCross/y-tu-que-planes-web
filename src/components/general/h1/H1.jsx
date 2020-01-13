import React from 'react'
import styles from './h1.module.scss'

const H1 = ({title}) => {
    return (
        <div className={styles.wrapper}>
            <h1 className={styles.h1}> {title} </h1>
        </div>
    )
}

export default H1
