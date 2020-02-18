import React from 'react'
import Layout from 'components/layout/Layout'
import Hero from 'components/home/Hero'
import Ofertas from '../components/home/Ofertas'

const Home = () => {

    return (
            <Layout>
                <Hero/>
                <Ofertas/>
            </Layout>
    )
}

export default Home