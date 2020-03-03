import React from 'react'
import styles from './button.module.scss'

const Button = ({ title, action, yellow, skyblue, palegreen, purple, green, xclassname, url, click }) => {
    return (
        <div className={styles.container_button}>
            {action ?
                <button
                    onClick={click}
                    className={
                    yellow ?
                        `${styles.wrapper_yellow} 
                        ${styles[xclassname]}`:
                    skyblue ? 
                        `${styles.wrapper_skyblue} 
                        ${styles[xclassname]}`:
                    palegreen ? 
                        `${styles.wrapper_palegreen} 
                        ${styles[xclassname]}`:
                    purple ?
                        `${styles.wrapper_purple} 
                        ${styles[xclassname]}` :
                    green ?
                        `${styles.wrapper_green} 
                        ${styles[xclassname]}`:
                    `${styles.wrapper} 
                    ${styles[xclassname]}`
                    }
                    
                >
                    <h3 className={styles.h3}>
                        {title}
                    </h3>
                </button> : 
                <a href={url} rel="noopener noreferrer">
                    <button
                        onClick={click}
                        className={styles.wrapper_round}
                    >
                        <h3 className={styles.h3}>
                            {title}
                        </h3>
                    </button>
                </a>
            }

        </div>
    )
}

Button.defaultProps = {
    title: 'Ver más experiencias',
    yellow: false, 
    skyblue: false,
    palegreen: false,
    purple: false,
    green: false,
    action: false,
    url: '',
    xclassname: '',
    click: null
};

export default Button