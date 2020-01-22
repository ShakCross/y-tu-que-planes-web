import React from 'react'
import styles from './ofertas.module.scss'
import MainContent from 'components/home/main-content/MainContent'
import Card from 'components/general/card/Card'
import H2 from 'components/general/h2/H2'
import Button from 'components/general/button/Button'
import CardSlider from 'components/general/card-slider/CardSlider'


const Ofertas = () => {
    return (
        <MainContent>
            <div className={styles.wrapper__text}>
                <H2 title="¡No hay excusas!" />
                <span className={styles.span}>
                    Encuentra las mejores ofertas para tu próximo viaje.
                </span>
                <div>
                    <Button yellow title="Ver todas las Ofertas" xclassname="ofertas_button" />
                </div>
            </div>
            <div className={styles.wrapper__content}>
                <div className={styles.inner_wrapper__content}>
                    <Card shadow image="https://i.picsum.photos/id/1003/1000/1100.jpg" />
                    <Card shadow image="https://i.picsum.photos/id/1003/1000/1100.jpg" />
                    <Card shadow image="https://i.picsum.photos/id/1003/1000/1100.jpg" />
                </div>
            </div>
            <CardSlider>
                <Card shadow image="https://i.picsum.photos/id/1003/1000/1100.jpg" />
                <Card shadow image="https://i.picsum.photos/id/1003/1000/1100.jpg" />
                <Card shadow image="https://i.picsum.photos/id/1003/1000/1100.jpg" />
            </CardSlider>
        </MainContent>
    )
}

export default Ofertas
