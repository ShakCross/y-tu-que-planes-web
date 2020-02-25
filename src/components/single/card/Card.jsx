import React, { useState } from 'react'
import styles from './card.module.scss'
import CardTitle from 'components/single/card/card-title/CardTitle'
import CardContent from 'components/single/card/card-content/CardContent'
import Button from 'components/general/button/Button'
import Modal from 'components/single/modal/Modal'


const Card = ({ image, title, yellow, skyblue, palegreen, purple, green, modalImage, content, click, responsive }) => {
    
    let [showModal, setShowModal] = useState(false);
    const handleShowModal = () => setShowModal(!showModal)

    return (
            <div>
                <div className={styles.wrapper}>
                    <img className={styles.img} src={image} alt=""/>
                    <CardTitle 
                        yellow={yellow} 
                        skyblue={skyblue} 
                        palegreen={palegreen} 
                        purple={purple} 
                        green={green} 
                        title={title} 
                    />
                    {
                    responsive ?
                    <Button 
                        action 
                        yellow={yellow} 
                        skyblue={skyblue} 
                        palegreen={palegreen} 
                        purple={purple} 
                        green={green} 
                        title='Más info'
                        click={click} 
                        xclassname='wrapper_single_card'
                    />:
                    <Button 
                        action 
                        yellow={yellow} 
                        skyblue={skyblue} 
                        palegreen={palegreen} 
                        purple={purple} 
                        green={green} 
                        title='Más info'
                        click={handleShowModal} 
                        xclassname='wrapper_single_card'
                    />
                    }
               </div>
                { showModal ?
                <Modal click={handleShowModal}>
                    <CardContent 
                        title={title} 
                        content={content} 
                        yellow={yellow} 
                        palegreen={palegreen} 
                        purple={purple}
                        skyblue={skyblue}
                        green={green}
                        image={modalImage} 
                    />
                </Modal>:
                ''}
            </div>
    )
}

Card.defaultProps = {
    action: false,
    yellow: false,
    skyblue: false,
    palegreen: false,
    purple: false,
    green: false,
    title: '',
    xclassname: '',
    title: 'Card Title',
    click: null  
};


export default Card
