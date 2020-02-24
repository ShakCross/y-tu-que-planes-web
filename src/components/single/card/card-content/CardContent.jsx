import React from 'react'
import styles from './card-content.module.scss'

const CardContent = ({ content, yellow, skyblue, palegreen, purple, green, title, image }) => {
    return (
        <>
            {
                    yellow ?
                        <div className={styles.wrapper_yellow}>
                            <img className={styles.img} src={image} alt=""/>
                            <div className={styles.title}>{ title }</div>
                            <ul className={styles.content_yellow}>
                                {content}
                            </ul>
                        </div> :
                    skyblue ?
                        <ul className={styles.content}>
                            {content}
                        </ul> :
                    palegreen ?
                        <div className={styles.wrapper_palegreen}>
                            <img className={styles.img} src={image} alt=""/>
                            <div className={styles.title}>{ title }</div>
                            <ul className={styles.content_palegreen}>
                                {content}
                            </ul>
                        </div> :
                    purple ?
                        <div className={styles.wrapper_purple}>
                            <img className={styles.img} src={image} alt=""/>
                            <div className={styles.title}>{ title }</div>
                            <ul className={styles.content_purple}>
                                {content}
                            </ul>
                        </div> :
                    green ?
                        <ul className={styles.content}>
                            {content}
                        </ul> :
                    <ul className={styles.content}>
                        {content}
                    </ul>
            }
            {/* ruta ?
                <div onClick={click} className={styles.ruta_wrapper}>
                    <img className={styles.img} src={image} alt=""/>
                    <div className={styles.title}>
                        {title}
                    </div>
                    <div className={styles.ruta}>
                        {via}
                    </div>
                    <ul className={styles.ruta_content}>
                        {content}
                    </ul>
                </div> :
             contacto ?
                <div onClick={click} className={styles.ruta_wrapper}>
                    <div className={styles.ruta}>
                        {via}
                    </div>
                    <ul className={styles.ruta_content}>
                        {content}
                    </ul>
                </div> : */}
        </>
    )
}

CardContent.defaultProps = {
    yellow: false,
};



export default CardContent
