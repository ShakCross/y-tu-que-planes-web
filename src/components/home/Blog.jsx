import React from 'react'
import styles from './blog.module.scss'
import Card from 'components/general/card/Card'
import H2 from 'components/general/h2/H2'
import Button from 'components/general/button/Button'
import MainContent from 'components/home/main-content/MainContent'
import CardSlider from 'components/general/card-slider/CardSlider'
import data from 'data/blog.json'

const Blog = () => {

    return (
        <MainContent>
            <div className={styles.wrapper__text}>
                <H2 title="¿No sabes a dónde ir?" />
                <span className={styles.span}>Descubre nuevas ideas de viaje gracias a las recomendaciones
                    de nuestros viajeros.
                    </span>
                <div>
                    <Button green title="Ver ofertas" xclassname="blog_button" url="https://www.ytuqueplanes.com/novedades" />
                </div>
            </div>
            <div className={styles.wrapper__content}>
                <div className={styles.inner_wrapper__content}>
                    {data.map(post =>
                        <Card 
                            key={post.id} 
                            image={post.imagen} 
                            title={post.titulo} 
                            location={post.localia} 
                            url={post.url} 
                        />
                    )}
                </div>
            </div>
            <CardSlider>
                {data.map(post =>
                    <Card 
                        key={post.id} 
                        image={post.imagen} 
                        title={post.titulo} 
                        location={post.localia} 
                        url={post.url}
                    />
                )}
            </CardSlider>
            <Button green title="Ir al Blog" xclassname="blog_button_mobile" url="https://www.ytuqueplanes.com/novedades" />
        </MainContent>
    )
}

export default Blog
