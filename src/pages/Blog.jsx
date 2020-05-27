import React from 'react'
import Seo from 'components/general/seo/Seo'
import Layout from 'components/layout/Layout'
import { HeroBlog } from 'components/general/hero/hero.stories.js'
import FilterCategorias from 'components/blog-viajero/filter-categorias/FilterCategorias'
import MainContent from 'components/blog-viajero/main-content/MainContent'
import Noticias from 'components/blog-viajero/noticias/Noticias'
import Parallax from 'components/home/Parallax'

const Home = () => {
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
                <HeroBlog/>
                <FilterCategorias/>
                <MainContent/>
                <Noticias/>
                <Parallax/>
            </Layout>
    )
}

export default Home