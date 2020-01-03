import React from 'react'
import styles from './button.module.scss'

const Button = ({title, green, yellow }) => {
    return (
        <button 
            className={`
                ${green ? styles.wrapper_green : styles.wrapper } 
                ${yellow ? styles.wrapper_yellow : styles.wrapper}
            `}
        >
            {title}
        </button>
    )
}

Button.defaultProps = {
    title: 'Más Información',
};

export default Button
