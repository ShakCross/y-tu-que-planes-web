import React from 'react'
import { withKnobs, text, number } from "@storybook/addon-knobs";
import Hero from './Hero';
import styles from './hero.module.scss'
import Text from 'components/general/text/Text';
import LimitWrapper from 'components/general/limit-wrapper/LimitWrapper'
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Breadcrumbs from 'components/general/breadcrumbs/Breadcrumbs'
import { SelectBlog } from 'components/general/select/select.stories.js'

export default {
    title: 'Hero',
    decorators: [withKnobs]
};

export const HeroOfertas = () => {

    return (
        <Hero
            className={styles.wrapper_big}
            image="http://mmsolutions.com.pe/turismo-comunitario/src/assets/img/slider.jpg"
            alt="ofertas-banner"
        >
            <LimitWrapper>
                <Breadcrumbs content="Ofertas" slug="ofertas" />
                <div className={styles.content_ofertas}>
                    <Text
                        content="Encuentra las mejores ofertas para tu próximo viaje"
                        headingLevel="h1"
                        className={styles.heading_ofertas}
                    />
                    <input className={styles.input_ofertas} type="text" placeholder="¿Cuál es tu destino?" />
                    <FontAwesomeIcon className={styles.input_arrow} icon={faChevronRight} />
                </div>
            </LimitWrapper>


        </Hero>
    )
}

export const HeroOfertasSingle = () => {

    return (
        <Hero
            className={styles.wrapper_medium}
            image="http://mmsolutions.com.pe/turismo-comunitario/src/assets/img/slider.jpg"
            alt="ofertas-banner"
        >
            <LimitWrapper>
                <Breadcrumbs content="Ofertas" slug="ofertas" />
                <div className={styles.content_ofertas_single}>
                    <div className={styles.wrapper_card_ofertas_single}>
                        <div className={styles.card_ofertas_single}>
                            <Text content="S/ 99" className={styles.price_ofertas_single} />
                            <Text content="Antes S/ 130" className={styles.discount_ofertas_single} />
                        </div>
                    </div>
                    <div className={styles.heading_ofertas_single}>
                        <Text
                            className={styles.duration_ofertas_single}
                            content="Full Day"
                        />
                        <Text
                            content="Trek bosque cataratas gigantes cuipes"
                            headingLevel="h1"
                            className={styles.title_ofertas_single}
                        />
                        <button className={styles.button_ofertas_single}>Me interesa</button>
                    </div>
                </div>
            </LimitWrapper>
        </Hero>
    )
}

export const HeroBlog = () => {

    return (
        <Hero
            className={styles.wrapper_big}
            image="http://mmsolutions.com.pe/turismo-comunitario/src/assets/img/slider.jpg"
            alt="blog-banner"
        >
            <LimitWrapper>
                <Breadcrumbs content="Blog" slug="blog-viajero" />
                <div className={styles.content_blog}>
                    <Text
                        content="Blog Viajero"
                        headingLevel="h1"
                        className={styles.title_blog}
                    />
                    <Text
                        content="Descubre de los impresionantes atractivos que puedes disfrutar en el Perú"
                        headingLevel="h3"
                        className={styles.heading_one_blog}
                    />
                    <Text
                        content="¿Qué destino deseas conocer?"
                        headingLevel="h2"
                        className={styles.heading_two_blog}
                    />
                    <SelectBlog />
                </div>
            </LimitWrapper>
        </Hero>
    )
}




