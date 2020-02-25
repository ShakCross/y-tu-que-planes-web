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
                        <div className={styles.wrapper_skyblue}>
                            <img className={styles.img} src={image} alt=""/>
                            <div className={styles.title}>
                                {title}
                            </div>
                            <div className={styles.content_skyblue}>
                                {content}    
                            </div>
                        </div> :
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
                        <div className={styles.wrapper_green}>
                            <img className={styles.img} src={image} alt=""/>
                            <div className={styles.title}>
                                {title}
                            </div>
                            <div className={styles.content_green}>
                                {content}    
                            </div>
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
