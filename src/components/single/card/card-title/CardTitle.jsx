import React from 'react'
import styles from './card-title.module.scss'


const CardTitle = ({ yellow, skyblue, palegreen, purple, green, title }) => {
    return (
               <div className={styles.wrapper}>
                   <div className={ 
                       yellow ? styles.title_yellow : 
                       skyblue ? styles.title_skyblue : 
                       palegreen ? styles.title_palegreen :
                       purple ? styles.title_purple :
                       green ? styles.title_green :
                       ''
                    }>
                        {title}
                   </div>
               </div>
    )
}

CardTitle.defaultProps = {
    yellow: false , 
    skyblue: false, 
    palegreen: false, 
    purple: false, 
    green: false,
    title: 'Precio y horario'
};



export default CardTitle
