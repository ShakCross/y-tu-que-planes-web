import React, { useState, useEffect } from 'react'
import axios from 'axios';
import styles from './ofertas.module.scss'
import MainContent from 'components/home/main-content/MainContent'
import Card from 'components/general/card/Card'
import H2 from 'components/general/h2/H2'
import Button from 'components/general/button/Button'
import CardSlider from 'components/general/card-slider/CardSlider'

const API = process.env.API;

const Ofertas = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                `${API}/ofertas/`,
            );
            setData(result.data);
        };
        fetchData();
    }, []);

    return (
        <MainContent>
            <div className={styles.wrapper__text}>
                <H2 title="¡No hay excusas!" />
                <span className={styles.span}>
                    Encuentra las mejores ofertas para tu próximo viaje.
                </span>
                <div>
                    <Button yellow title="Ver todas las Ofertas" xclassname="ofertas_button" url="https://www.ytuqueplanes.com/ofertas" />
                </div>
            </div>
            <div className={styles.wrapper__content}>
                <div className={styles.inner_wrapper__content}>
                    {data.map(post =>
                        <Card
                            shadow
                            key={post.id}
                            image={API + post.imagen.url}
                            title={post.titulo}
                            price={post.precio}
                            before={post.antes}
                            url={post.url}
                            alt={post.alt}
                        />
                    )}
                </div>
            </div>
            <CardSlider>
                {data.map(post =>
                    <Card
                        shadow
                        key={post.id}
                        image={API + post.imagen.url}
                        title={post.titulo}
                        price={post.precio}
                        before={post.antes}
                        url={post.url}
                        alt={post.alt}
                    />
                )}
            </CardSlider>
            <Button yellow title="Ver todas las Ofertas" xclassname="ofertas_button_mobile" url="https://www.ytuqueplanes.com/ofertas" />
        </MainContent>
    )
}

export default Ofertas
