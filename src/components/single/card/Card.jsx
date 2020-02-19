import React from 'react'
import styles from './card.module.scss'
import CardTitle from 'components/single/card/card-title/CardTitle'
import CardContent from 'components/single/card/card-content/CardContent'


const Card = ({ image, title, yellow, skyblue, pale_green, purple, green, content, ruta, contacto, via}) => {
    return (
               <div className={styles.wrapper}>
                    <img className={styles.img} src={image} alt=""/>
                    <CardTitle 
                        yellow={yellow} 
                        skyblue={skyblue} 
                        pale_green={pale_green} 
                        purple={purple} 
                        green={green} 
                        title={title} 
                    />
                    <CardContent content={content} ruta={ruta} contacto={contacto} via={via} />
               </div>
    )
}

Card.defaultProps = {
    yellow: false , 
    skyblue: false, 
    pale_green: false, 
    purple: false, 
    green: false,
    title: 'Precio y Horario'
};


export default Card
