import React from 'react'
import Seo from 'components/general/seo/Seo'
import Layout from 'components/layout/Layout'
import Blog from 'components/home/Blog'
import Ofertas from 'components/home/Ofertas'
import Hero from 'components/home/Hero'
import Destinos from 'components/home/Destinos'
import hero_img from 'assets/img/hero-img.jpg'

const Home = () => {
    return (
            <Layout>
                <Seo
                   title="Y tú qué planes?  | Turismo y Viajes Perú" 
                   desc="Turismo, ofertas de viaje por semana santa en Perú | Y tú qué planes? " 
                   canonical="https://www.ytuqueplanes.com" 
                   ogTitle="Y tú qué planes? - Turismo y Viajes Perú" 
                   ogDesc="¡Conoce el Perú! Te invitamos a que viajes y descubras los destinos, actividades y planes en el Perú que aún no conoces." 
                   ogUrl="https://www.ytuqueplanes.com/" 
                   ogImage="https://www.ytuqueplanes.com/images/ytqp-share2.jpg"
                   hashTag="@ConoceelPeru" 
                />
                <Hero
                    title={`Perú está de fiesta, Lorem ipsum ${''} dolor
                    sit amet, consectetur adipiscing`}
                    image={hero_img}
                />

                <Blog/>
                <Ofertas/>
            </Layout>
    )
}

export default Home