import React from 'react'
import Layout from 'components/layout/Layout'
import Hero from 'components/home/Hero'
import Ofertas from 'components/home/Ofertas'
import image from 'assets/img/slider.jpeg'

const Home = () => {

    return (
            <Layout>
                <Hero title="Turismo Comunitario en Lima" desc="Navega por los aguajales y renacales de Tingana" image={image}/>
                <Ofertas/>
            </Layout>
    )
}

export default Home