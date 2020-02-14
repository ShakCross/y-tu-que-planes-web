import React from 'react'
import styles from './alert.module.scss'

const Alert = ({ content, url }) => {
    return (
        <div className={styles.alert}>
            <div className={styles.head}>
                <div className={styles.chip}>
                    Nuevo
                </div>
                <div className={styles.title}>
                    Telecabinas Kueláp
                </div>
            </div>
            <div className={styles.footer}>
                <div className={styles.content}>
                    {content}
                </div>
                <a className={styles.info} href={url} target="_blank" rel="noopener noreferrer">
                    Más información >
                </a>
            </div>
        </div>
    )
}
Alert.defaultProps = {
    content: 'Nuevo horario de atención hasta las 05:00 p.m.',
    url: '#'
};

export default Alert
