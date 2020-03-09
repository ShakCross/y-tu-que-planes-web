import React from 'react'
import styles from './button.module.scss'

const Button = ({ title, green, yellow, purple, xclassname, url, skyblue, action, click }) => {
    return (
        <div className={styles.container_button}>
            {action ?
                <button
                    onClick={click}
                    className={`
                        ${styles[xclassname]}
                        ${green ? styles.wrapper_green :
                            yellow ? styles.wrapper_yellow :
                                purple ? styles.wrapper_purple :
                                    skyblue ? styles.wrapper_skyblue :
                                        styles.wrapper}
                        `}
                >
                    {title}
                </button>
                :
                <a href={url} target="_blank" rel="noopener noreferrer">
                    <button
                        className={`
                            ${styles[xclassname]}
                            ${green ? styles.wrapper_green :
                                yellow ? styles.wrapper_yellow :
                                    purple ? styles.wrapper_purple :
                                        skyblue ? styles.wrapper_skyblue :
                                            styles.wrapper}  
                            `}
                    >
                        {title}
                    </button>
                </a>

            }
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