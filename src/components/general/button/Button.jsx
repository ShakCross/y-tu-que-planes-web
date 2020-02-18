import React from 'react'
import styles from './button.module.scss'

const Button = ({ title, yellow, purple, xclassname, url, click }) => {
    return (
        <div className={styles.container_button}>
            <a target="_blank" rel="noopener noreferrer">
                <button
                    onClick={click}
                    className={yellow ? styles.wrapper_yellow : purple ? styles.wrapper_purple : styles.wrapper}
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
    url: ''
};

export default Button