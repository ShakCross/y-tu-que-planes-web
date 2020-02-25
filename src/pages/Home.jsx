import React from 'react'
import Layout from 'components/layout/Layout'
import Hero from 'components/home/Hero'
import Ofertas from 'components/home/Ofertas'
import image_lg from 'assets/img/slider.jpg'
import image_sm from 'assets/img/slider_sm.png'
import logo from 'assets/img/tc-logo.png'
const input = '# This is a header\n\nAnd this is a paragraph'
import ReactMarkdown from 'react-markdown'


const Home = () => {
    return (
            <Layout>
                <Hero 
                    title="Turismo Comunitario" 
                    desc="¡El Perú es mucho más que lindos paisajes! 
                    Descubre tradiciones y costumbres milenarias."
                    image_lg={image_lg} 
                    image_sm={image_sm}
                    logo={logo}
                    responsive
                />
                <Ofertas/>
                {/* <ReactMarkdown source={data}/> */}
            </Layout>
         
    )
}

export default Home