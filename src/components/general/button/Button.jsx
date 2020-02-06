import React from 'react'
import styles from './button.module.scss'

const Button = ({ title, green, yellow, purple, xclassname, url }) => {
    return (
        <div className={styles.container_button}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <button
                className={`
                    ${green ? styles.wrapper_green : styles.wrapper} 
                    ${yellow ? styles.wrapper_yellow : styles.wrapper}
                    ${purple ? styles.wrapper_purple : styles.wrapper} 
                    ${styles[xclassname]}
                `}
                >
                    {title}
                </button>
            </a>
        </div>
    )
}

Button.defaultProps = {
    title: 'Más Información',
    green: false,
    yellow: false,
    purple: false,
    xclassname: 'null',
    url: '#'
};

export default Button