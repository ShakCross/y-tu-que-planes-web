import React from 'react'
import styles from './button.module.scss'

const Button = ({ title, green, yellow, xclassname }) => {
    return (
        <div className={styles.container_button}>
            <button
                className={`
                ${green ? styles.wrapper_green : styles.wrapper} 
                ${yellow ? styles.wrapper_yellow : styles.wrapper} 
                ${styles[xclassname]}
            `}
            >
                {title}
            </button>
        </div>
    )
}

Button.defaultProps = {
    title: 'Más Información',
    green: false,
    yellow: false,
    xclassname: ''
};

export default Button