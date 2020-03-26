import React from 'react'
import Seo from 'components/general/seo/Seo'
import Layout from 'components/layout/Layout'
import MainContent from 'components/ofertas/main-content/MainContent'
import Ofertas from 'components/home/Ofertas'
import Festividades from 'components/home/Festividades'
import Hero from 'components/home/Hero'
import Card from 'components/general/newcard/Card'
import { ShadowPrice } from 'components/general/card/card.stories'

const Main = () => {
    return (
        <Layout>
            <Seo
                title="Y tú qué planes? | Turismo y Viajes Perú"
                desc="Turismo, ofertas de viaje por semana santa en Perú | Y tú qué planes? "
                canonical="https://www.ytuqueplanes.com"
                ogTitle="Y tú qué planes? - Turismo y Viajes Perú"
                ogDesc="¡Conoce el Perú! Te invitamos a que viajes y descubras los destinos, actividades y planes en el Perú que aún no conoces."
                ogUrl="https://www.ytuqueplanes.com/"
                ogImage="https://www.ytuqueplanes.com/images/ytqp-share2.jpg"
                hashTag="@ConoceelPeru"
            />
            <Hero title="Encuentra las mejores ofertas para tu próximo viaje"
            image="https://ytuqueplanes.com/turismo-comunitario/src/assets/img/slider.jpg" 
            />
            <MainContent/>
        </Layout>
    )
}

export default Main