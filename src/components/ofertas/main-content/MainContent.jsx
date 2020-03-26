import React from 'react'
import styles from './main-content.module.scss'
import LimitWrapper from 'components/general/limit-wrapper/LimitWrapper'
import { SmallShadowPrice } from 'components/general/card/card.stories'
import Text from 'components/general/text/Text'
import Button from 'components/general/button/Button'
import data from 'data/ofertas2.json'

const MainContent = () => {
    return (
        <LimitWrapper>
            <div className={styles.filter_wrapper}>
                <div className={styles.filter}>
                    <button className={styles.filter_button_active}>
                        Todos los productos
                    </button>
                    <button className={styles.filter_button}>
                        Paquetes
                    </button>
                    <button className={styles.filter_button}>
                        Tours
                    </button>
                    <button className={styles.filter_button}>
                        Full days
                    </button>
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Text className={styles.header_text} content="RECIENTES (10)" headingLevel="h3" />
                    <button className={styles.header_button}>
                        Ver más
                    </button>
                </div>
                <div className={styles.card_slider} >
                    {data.map(post =>
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
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Text className={styles.header_text} content="PARA UNIVERSITARIOS (10)" headingLevel="h3" />
                    <button className={styles.header_button}>
                        Ver más
                    </button>
                </div>
                <div className={styles.card_slider} >
                    {data.map(post =>
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
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Text className={styles.header_text} content="RECOMENDADOS (10)" headingLevel="h3" />
                    <button className={styles.header_button}>
                        Ver más
                    </button>
                </div>
                <div className={styles.card_slider} >
                    {data.map(post =>
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
                </div>
            </div>
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <Text className={styles.header_text} content="FERIADO LARGO (10)" headingLevel="h3" />
                    <button className={styles.header_button}>
                        Ver más
                    </button>
                </div>
                <div className={styles.card_slider} >
                    {data.map(post =>
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
                </div>
            </div>
        </LimitWrapper>
    )
}

export default MainContent
