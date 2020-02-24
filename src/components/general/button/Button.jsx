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
                    {title}
                </button> : 
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <button
                        onClick={click}
                        className={styles.wrapper_round}
                    >
                        {title}
                    </button>
                </a>
            }

        </div>
    )
}

Button.defaultProps = {
    title: 'Ver más experiencias',
    purple: false,
    url: '',
    xclassname: '',
    click: null,
    yellow: false, 
    skyblue: ''
};

export default Button