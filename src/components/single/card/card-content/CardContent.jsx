import React from 'react'
import styles from './card-content.module.scss'

const CardContent = ({ content, ruta, contacto, via }) => {
    return (
        <>
            {ruta ?
                <div className={styles.ruta_wrapper}>
                    <div className={styles.ruta}>
                        {via}
                    </div>
                    <ul className={styles.ruta_content}>
                        {content}
                    </ul>
                </div> :
             contacto ?
                <div className={styles.ruta_wrapper}>
                    <div className={styles.ruta}>
                        {via}
                    </div>
                    <ul className={styles.ruta_content}>
                        {content}
                    </ul>
                </div> :
                <ul className={styles.content}>
                    {content}
                </ul>
            }
        </>
    )
}

CardContent.defaultProps = {
    yellow: false,
};



export default CardContent
