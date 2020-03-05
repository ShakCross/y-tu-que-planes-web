import React from 'react'
import styles from './blog.module.scss'
import Card from 'components/general/card/Card'
import Text from 'components/general/text/Text'
import Button from 'components/general/button/Button'
import MainContent from 'components/home/main-content/MainContent'
import CardSlider from 'components/general/card-slider/CardSlider'
import data from 'data/blog.json'

const Blog = () => {

    return (
        <MainContent>
            <div className={styles.wrapper__text}>
                <Text content="Neque porro quisquam est qui dolorem ipsum" className={styles.heading_santa_blog}/>
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
                {/* {data.map(post =>
                    <Card 
                        key={post.id} 
                        image={post.imagen} 
                        title={post.titulo} 
                        location={post.localia} 
                        url={post.url}
                    />
                )} */}
        </MainContent>
    )
}

export default Blog
