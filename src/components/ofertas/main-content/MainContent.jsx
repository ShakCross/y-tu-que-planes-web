import React, { useState } from 'react'
import styles from './main-content.module.scss'
import LimitWrapper from 'components/general/limit-wrapper/LimitWrapper'
import { SmallShadowPrice } from 'components/general/card/card.stories'
import Text from 'components/general/text/Text'
import Slider from 'react-slick'
import Filter from 'components/general/filter/Filter'
import data from 'data/ofertas2.json'

const MainContent = () => {

    const [tags, setTags] = useState('')

    const handleFilterTodos = () => {
        setTags('')
    }

    const handleFilter1 = () => {
        setTags('paquete')
    }

    const handleFilter2 = () => {
        setTags('tour')
    }

    const handleFilter3 = () => {
        setTags('full day')
    }

    const filterTags = tags === '' ? x => x.tipo : x => x.tipo === tags
    const filterCat1 = x => x.categoria === 'universitario'
    const filterCat2 = x => x.categoria === 'recomendados'
    const filterCat3 = x => x.categoria === 'fin de año'

    const number1 = data.filter(filterCat1).length
    const number2 = data.filter(filterCat2).length
    const number3 = data.filter(filterCat3).length

    const settings = {
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        variableWidth: true,
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    slidesToShow: 1,
                    autoplay: true,
                    autoplaySpeed: 2000,
                    centerMode: true,
                    variableWidth: true,
                    centerPadding: "0%",
                    arrows: false,
                }
            }
        ]

    }

    return (
        <LimitWrapper>
            <div className={styles.filter_wrapper}>
                <Filter
                    content1="Todos los productos"
                    content2="Paquetes"
                    content3="Tours"
                    content4="Full days"
                    filter1={handleFilterTodos}
                    filter2={handleFilter1}
                    filter3={handleFilter2}
                    filter4={handleFilter3}
                />
            </div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Text className={styles.header_text} content={`RECIENTES (${number1})`} headingLevel="h3" />
                    <button className={styles.header_button}>
                        Ver más
                    </button>
                </div>
                <Slider {...settings}>
                    {data.filter(filterCat1).filter(filterTags).map(post =>
                        <div>
                            <SmallShadowPrice
                                key={post.id}
                                image={post.imagen}
                                title={post.titulo}
                                price={post.precio}
                                before={post.antes}
                                duration={post.duracion}
                                alt={post.alt}
                                url={post.url}
                            />
                        </div>
                    )}
                </Slider>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Text className={styles.header_text} content={`PARA UNIVERSITARIOS (${number2})`} headingLevel="h3" />
                    <button className={styles.header_button}>
                        Ver más
                    </button>
                </div>
                <Slider {...settings}>
                    {data.filter(filterCat2).filter(filterTags).map(post =>
                        <SmallShadowPrice
                            key={post.id}
                            image={post.imagen}
                            title={post.titulo}
                            price={post.precio}
                            before={post.antes}
                            duration={post.duracion}
                            alt={post.alt}
                            url={post.url}
                        />
                    )}
                </Slider>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Text className={styles.header_text} content={`RECOMENDADOS (${number3})`} headingLevel="h3" />
                    <button className={styles.header_button}>
                        Ver más
                    </button>
                </div>
                <Slider {...settings}>
                    {data.filter(filterCat3).filter(filterTags).map(post =>
                        <SmallShadowPrice
                            key={post.id}
                            image={post.imagen}
                            title={post.titulo}
                            price={post.precio}
                            before={post.antes}
                            duration={post.duracion}
                            alt={post.alt}
                            url={post.url}
                        />
                    )}
                </Slider>
            </div>
        </LimitWrapper>
    )
}

export default MainContent
