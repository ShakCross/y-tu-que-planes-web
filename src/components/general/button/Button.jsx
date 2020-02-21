import React from 'react'
import styles from './button.module.scss'

const Button = ({ title, yellow, purple, xclassname, url, click }) => {
    return (
        <div className={styles.container_button}>
            {yellow ?
                <button
                    onClick={click}
                    className={styles.wrapper}
                >
                    {title}
                </button> : 
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <button
                        onClick={click}
                        className={styles.wrapper_purple}
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
    url: ''
};

export default Button