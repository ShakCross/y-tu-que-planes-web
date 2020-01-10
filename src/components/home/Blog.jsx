import React from 'react'
import styles from './blog.module.scss'
import Card from 'components/general/card/Card'
import H2 from 'components/general/h2/H2'
import Button from 'components/general/button/Button'
import MainContent from './MainContent'


const Blog = () => {
    return (
        <MainContent>
            <div className={styles.wrapper__text}>
                <H2 title="¿No sabes a dónde ir?" />
                <span className={styles.span}>Descubre nuevas ideas de viaje gracias a las recomendaciones
                    de nuestros viajeros.
                    </span>
                <div>
                    <Button green title="Ir al Blog" />
                </div>
            </div>
            <div className={styles.wrapper__content}>
                <div className={styles.inner_wrapper__content}>
                    <Card image="https://i.picsum.photos/id/112/4200/2800.jpg"/>
                    <Card image="https://i.picsum.photos/id/112/4200/2800.jpg"/>
                    <Card image="https://i.picsum.photos/id/112/4200/2800.jpg"/>
                </div>
            </div>
        </MainContent>
    )
}

export default Blog
