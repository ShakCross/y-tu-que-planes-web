import React from 'react'
import styles from './blog.module.scss'
import Card from 'components/general/card/Card'
import Text from 'components/general/text/Text'
import MainContent from 'components/home/main-content/MainContent'
import data from 'data/blog.json'
import CardSlider from 'components/general/card-slider/CardSlider'

const Blog = () => {

    return (
        <MainContent>
            <div className={styles.wrapper__text}>
                <Text content="Neque porro quisquam est qui dolorem ipsum" className={styles.heading_santa_blog} headingLevel="h1" />
            </div>
            <div className={styles.wrapper__content}>
                <div className={styles.inner_wrapper__content}>
                    {data.map(post =>
                        <Card
                            key={post.id}
                            image={post.imagen}
                            alt={post.alt}
                            title={post.titulo}
                            url={post.url}
                        />
                    )}
                </div>
                <CardSlider
                    autoplay
                    delayLength={6000}
                >
                    <div className={styles.inner_wrapper__content}>
                        {data.map(post =>
                            <Card
                                key={post.id}
                                image={post.imagen}
                                alt={post.alt}
                                title={post.titulo}
                                url={post.url}
                            />
                        )}
                    </div>
                </CardSlider>
            </div>
        </MainContent>
    )
}

export default Blog
