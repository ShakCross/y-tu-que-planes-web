import React from 'react'
import Layout from 'components/layout/Layout'
import Parallax from 'components/home/Parallax'
import Festividades from 'components/home/Festividades'

const Home = () => {
    return (
            <Layout>
                <Festividades/>
                <Parallax/>
            </Layout>
    )
}

export default Home
