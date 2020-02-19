import React from 'react'
import styles from './card-title.module.scss'


const CardTitle = ({ yellow, skyblue, pale_green, purple, green, title }) => {
    return (
               <div className={styles.wrapper}>
                   <div className={ 
                       yellow ? styles.title_yellow : 
                       skyblue ? styles.title_sky_blue : 
                       pale_green ? styles.title_pale_green :
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
    pale_green: false, 
    purple: false, 
    green: false,
    title: 'Precio y Horario'
};



export default CardTitle
