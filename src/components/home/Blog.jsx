import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './blog.module.scss'
import Card from 'components/general/card/Card'
import H2 from 'components/general/h2/H2'
import Button from 'components/general/button/Button'
import MainContent from 'components/home/main-content/MainContent'
import CardSlider from 'components/general/card-slider/CardSlider'

const API = process.env.API;

const Blog = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          const result = await axios(
            `${API}/blogs/`,
          );
          setData(result.data);
        };
        fetchData();
      }, []);

    return (
        <MainContent>
            <div className={styles.wrapper__text}>
                <H2 title="¿No sabes a dónde ir?" />
                <span className={styles.span}>Descubre nuevas ideas de viaje gracias a las recomendaciones
                    de nuestros viajeros.
                    </span>
                <div>
                    <Button green title="Ir al Blog" xclassname="blog_button" url="https://www.ytuqueplanes.com/novedades" />
                </div>
            </div>
            <div className={styles.wrapper__content}>
                <div className={styles.inner_wrapper__content}>
                    {data.map(post =>
                        <Card 
                            key={post.id} 
                            image={API + post.imagen.url} 
                            title={post.titulo} 
                            location={post.localia}
                            url={post.url} 
                            alt={post.alt} 
                        />
                    )}
                </div>
            </div>
            <CardSlider>
                {data.map(post =>
                    <Card 
                        key={post.id} 
                        image={API + post.imagen.url} 
                        title={post.titulo} 
                        location={post.localia} 
                        url={post.url} 
                        alt={post.alt}
                    />
                )}
            </CardSlider>
            <Button green title="Ir al Blog" xclassname="blog_button_mobile" url="https://www.ytuqueplanes.com/novedades" />
        </MainContent>
    )
}

export default Blog
