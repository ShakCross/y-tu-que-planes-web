import React from 'react'
import styles from './button.module.scss'

const Button = ({ title, yellow, purple, xclassname, url }) => {
    return (
        <div className={styles.container_button}>
            <a href={url} target="_blank" rel="noopener noreferrer">
                <button
                className={`
                    ${yellow ? styles.wrapper_yellow : styles.wrapper}
                    ${purple ? styles.wrapper_purple : styles.wrapper} 
                `}
                >
                    {title}
                </button>
            </a>
        </div>
    )
}

Button.defaultProps = {
    title: 'Ver más ofertas',
    purple: false,
    url: '#'
};

export default Button