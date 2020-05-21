import React from 'react'
import { Helmet } from "react-helmet";
import Layout from 'components/layout/Layout'
import Hero from 'components/home/Hero'
import Ofertas from 'components/home/Ofertas'
import image_lg from 'assets/img/slider.jpg'
import image_sm from 'assets/img/slider_sm.png'
import logo from 'assets/img/tc-logo.png'
import ModalViaja from 'components/home/modal-viaje/ModalViaja';


const Home = () => {
    return (
    <>
        <Helmet>
            <meta name="description" 
                content=" Experiencias que trascienden en el Peru este 2020. Turismo comunitario en el Perú gracias a Y tú qué planes. Conoce nuevas experiencias y tradiciones."/>
            <meta property="og:title" content="Turismo Comunitario 2020 | Y tú qué planes?" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://ytuqueplanes.com/turismo-comunitario/#/" />
            <meta property="og:image" content="https://ytuqueplanes.com/turismo-comunitario/src/assets/img/turismo-comunitario.jpg" />
            <meta property="og:site_name" content="Y tú qué planes?" />
            <meta property="og:description"
                content="Experiencias que trascienden en el Peru este 2020. Turismo comunitario en el Perú gracias a Y tú qué planes." />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="summary_large_image" />
            <meta name="twitter:title" content="Turismo Comunitario 2020 | Y tú qué planes?" />
            <meta name="twitter:description"
                content="Experiencias que trascienden en el Peru este 2020. Turismo comunitario en el Perú gracias a Y tú qué planes." />
            <meta name="twitter:image" content="https://ytuqueplanes.com/turismo-comunitario/src/assets/img/turismo-comunitario.jpg" />

            <link href="https://www.ytuqueplanes.com/turismo-comunitario/#/" rel="canonical"></link> 
            <link rel="shortcut icon" href="src/assets/img/ytqp-2.png" type="image/x-icon" />

            <title>Turismo Comunitario en el Perú 2020✈🇵🇪 | Y tú qué planes?</title>

        </Helmet>
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
        </Layout>
     </>    
    )
}

export default Home