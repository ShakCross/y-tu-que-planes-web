import React from 'react'
import styles from './button.module.scss'

const Button = ({ title, green, yellow, darkyellow, purple, skyblue, palegreen, xclassname, url, anchor, click }) => {
    return (
        <div className={styles.container_button}>
            {anchor ?
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <button
                        className={ 
                        yellow ?
                            `${styles.wrapper_yellow} 
                            ${styles[xclassname]}`:
                        darkyellow ?
                            `${styles.wrapper_darkyellow} 
                            ${styles[xclassname]}` :
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
                        ${styles[xclassname]}`}
                    >
                        {title}
                    </button>
                </a> :
                <button
                    onClick={click}
                    className={ 
                        yellow ?
                            `${styles.wrapper_yellow} 
                            ${styles[xclassname]}`:
                        darkyellow ?
                            `${styles.wrapper_darkyellow} 
                            ${styles[xclassname]}` :
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
                        ${styles[xclassname]}`}
                >
                    {title}
                </button>
            }
        </div>
    )
}

Button.defaultProps = {
    title: 'Más Información',
    green: false,
    yellow: false,
    darkyellow: false,
    purple: false,
    xclassname: 'null',
    url: '#'
};

export default Button