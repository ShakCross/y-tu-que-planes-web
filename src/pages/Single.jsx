import React, { useState } from 'react'
import { Route } from 'react-router-dom'
import { Helmet } from "react-helmet";
import Layout from 'components/layout/Layout'
import Hero from 'components/home/Hero'
import Explora from 'components/single/Explora'
import Card from 'components/single/card/Card'
import clock from 'assets/img/clock.svg'
import clockwhite from 'assets/img/clockwhite.svg'
import bulb from 'assets/img/bulb.svg'
import bulbwhite from 'assets/img/bulbwhite.svg'
import sun from 'assets/img/sun.svg'
import sunwhite from 'assets/img/sunwhite.svg'
import pin from 'assets/img/pin.svg'
import pinwhite from 'assets/img/pinwhite.svg'
import phone from 'assets/img/phone.svg'
import styles from './single.module.scss'
import Slider from "react-slick";
import Panel from 'components/single/panel/Panel'
import data from 'data/turismo-lima-interna.json'
import Modal from 'components/single/modal/Modal'
import CardContent from 'components/single/card/card-content/CardContent'
import logo from 'assets/img/tc-logo.png'


const Single = () => {

    const settings = {
        responsive: [
            {
                breakpoint: 577,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "25%",
                    slidesToShow: 1,
                    speed: 500,
                    arrows: false,
                    autoplay: true
                }
            },
            {
                breakpoint: 420,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "20%",
                    slidesToShow: 1,
                    speed: 500,
                    arrows: false,
                    autoplay: true
                }
            }
        ]
    }

    let [showYellow, setShowYellow] = useState(false);
    const handleShowYellow = () => setShowYellow(!showYellow)

    let [showSkyBlue, setShowSkyBlue] = useState(false);
    const handleShowSkyBlue = () => setShowSkyBlue(!showSkyBlue)

    let [showPaleGreen, setShowPaleGreen] = useState(false);
    const handleShowPaleGreen = () => setShowPaleGreen(!showPaleGreen)

    let [showPurple, setShowPurple] = useState(false);
    const handleShowPurple = () => setShowPurple(!showPurple)

    let [showGreen, setShowGreen] = useState(false);
    const handleShowGreen = () => setShowGreen(!showGreen)

    return (
        <>
            <Layout>
                {data.map(post =>
                    <Route key={post.id} exact path={'/' + post.slug}>
                    <Helmet>
                        <meta name="description" 
                            content={`Experiencias que trascienden este 2020. Turismo comunitario en el Perú gracias a Y tú qué planes. Conoce ${post.titulo}, nuevas experiencias y tradiciones.`}/>
                        
                        <meta property="og:title" content={`${post.titulo} | Turismo Comunitario 2020 | Y tú qué planes?`}/>
                        <meta property="og:type" content="website" />
                        <meta property="og:url" content={`https://ytuqueplanes.com/turismo-comunitario/#/${post.slug}`} />
                        <meta property="og:image" content="https://ytuqueplanes.com/turismo-comunitario/src/assets/img/turismo-comunitario.jpg"/>
                        <meta property="og:site_name" content="Y tú qué planes?" />
                        <meta property="og:description"
                            content={`Experiencias que trascienden este 2020. Turismo comunitario en el Perú gracias a Y tú qué planes. Conoce ${post.titulo}, nuevas experiencias y tradiciones.`} />
                        <meta name="twitter:card" content="summary_large_image" />
                        <meta name="twitter:site" content="summary_large_image" />
                        <meta name="twitter:title" content={`${post.titulo} | Turismo Comunitario 2020 | Y tú qué planes?`}/> 
                        <meta name="twitter:description"
                            content={`Experiencias que trascienden este 2020. Turismo comunitario en el Perú gracias a Y tú qué planes. Conoce ${post.titulo}, nuevas experiencias y tradiciones.`}/>
                        <meta name="twitter:image" content="https://ytuqueplanes.com/turismo-comunitario/src/assets/img/turismo-comunitario.jpg" />

                        <link href={`https://www.ytuqueplanes.com/turismo-comunitario/#/${post.slug}`} rel="canonical"></link> 

                        <title>{ `${post.titulo} | Turismo Comunitario en el Perú 2020✈🇵🇪 | Y tú qué planes` }</title>
                        
                    </Helmet>
                        <Hero 
                            title={post.titulo}
                            desc={post.subtitulo}
                            chip
                            location={post.provincia}
                            image={post.imagen}
                            breadcrumbs
                            content={post.titulo}
                            slug={post.slug}
                            logo={logo} 
                        />
                        <div className={styles.desc}>
                            {post.desc}
                        </div>
                        <div className={styles.panel}>
                            <Panel left li_left={post.hacer.map(post =>
                                <li key={post.id}>{'• ' + post.li}</li>
                            )} />
                            <Panel right li_right={post.servicios.map(post =>
                                <li key={post.id}>{'• ' + post.li}</li>
                            )} />
                        </div>
                        <div className={styles.wrapper}>
                            <Card
                                title="Precio y horario"
                                yellow
                                image={clock}
                                modalImage={clockwhite}
                                content={post.precio.map(post =>
                                    <li key={post.id}>{'• ' + post.li}</li>
                                )}
                            />
                            <Card
                                title="¿Cómo llegar?"
                                skyblue
                                image={pin}
                                modalImage={pinwhite}
                                content={post.llegar.map(transporte =>
                                    <div className={styles.rutas_wrapper} key={transporte.via}>
                                        <div className={styles.subtitle}>{transporte.via}</div>
                                        <ul>{transporte.rutas.map(rutas =>
                                            <li key={rutas.id} >{'• ' + rutas.li}</li>
                                        )}</ul>
                                    </div>
                                )}
                            />
                            <Card
                                title="Clima y altura"
                                palegreen
                                image={sun}
                                modalImage={sunwhite}
                                content={post.clima.map(post =>
                                    <li key={post.id}>{'• ' + post.li}</li>
                                )}
                            />
                            <Card
                                title="Tips de viaje"
                                purple
                                image={bulb}
                                modalImage={bulbwhite}
                                content={post.tips.map(post =>
                                    <li key={post.id}>{'• ' + post.li}</li>
                                )}
                            />
                            <Card
                                title="Contacto"
                                green
                                image={phone}
                                modalImage={pinwhite}
                                content={post.contacto.map(transporte =>
                                    <div className={styles.contacto_wrapper} key={transporte.agencia}>
                                        <div className={styles.subtitle}>{transporte.agencia}</div>
                                        <ul>{transporte.datos.map(rutas =>
                                            <li key={rutas.id} >{'• ' + rutas.li}</li>
                                        )}</ul>
                                    </div>
                                )}
                            />
                        </div>
                        <div className={styles.wrapper_mobile}>
                            <Slider {...settings}>
                                <Card
                                    responsive
                                    click={handleShowYellow}
                                    title="Precio y horario"
                                    yellow
                                    image={clock}
                                />
                                <Card
                                    responsive
                                    click={handleShowSkyBlue}
                                    title="¿Cómo llegar?"
                                    skyblue
                                    image={pin}
                                />
                                <Card
                                    responsive
                                    click={handleShowPaleGreen}
                                    title="Clima y altura"
                                    palegreen
                                    image={sun}
                                    modalImage={pinwhite}
                                />
                                <Card
                                    responsive
                                    click={handleShowPurple}
                                    title="Tips de viaje"
                                    purple
                                    image={bulb}
                                />
                                <Card
                                    responsive
                                    click={handleShowGreen}
                                    title="Contacto"
                                    green
                                    image={phone}
                                    modalImage={pinwhite}
                                />
                            </Slider>
                            {
                                showYellow ?
                                    <Modal responsive click={handleShowYellow}>
                                        <CardContent
                                            title="Precio y horario"
                                            yellow
                                            image={clockwhite}
                                            content={post.precio.map(post =>
                                                <li key={post.id}>{'• ' + post.li}</li>
                                            )}
                                        />
                                    </Modal> :
                                    showSkyBlue ?
                                        <Modal responsive click={handleShowSkyBlue}>
                                            <CardContent
                                                title="¿Cómo llegar?"
                                                skyblue
                                                image={pinwhite}
                                                content={post.llegar.map(transporte =>
                                                    <div className={styles.rutas_wrapper} key={transporte.via}>
                                                        <div className={styles.subtitle}>{transporte.via}</div>
                                                        <ul>{transporte.rutas.map(rutas =>
                                                            <li key={rutas.id} >{'• ' + rutas.li}</li>
                                                        )}</ul>
                                                    </div>
                                                )}
                                            />
                                        </Modal> :
                                        showPaleGreen ?
                                            <Modal responsive click={handleShowPaleGreen}>
                                                <CardContent
                                                    title="Clima y altura"
                                                    palegreen
                                                    image={sunwhite}
                                                    content={post.clima.map(post =>
                                                        <li key={post.id}>{'• ' + post.li}</li>
                                                    )}
                                                />
                                            </Modal> :
                                            showPurple ?
                                                <Modal responsive click={handleShowPurple}>
                                                    <CardContent
                                                        title="Tips de viaje"
                                                        purple
                                                        image={bulbwhite}
                                                        content={post.tips.map(post =>
                                                            <li key={post.id}>{'• ' + post.li}</li>
                                                        )}
                                                    />
                                                </Modal> :
                                                showGreen ?
                                                    <Modal responsive click={handleShowGreen}>
                                                        <CardContent
                                                            title="Contacto"
                                                            green
                                                            image={pinwhite}
                                                            content={post.contacto.map(transporte =>
                                                                <div className={styles.contacto_wrapper} key={transporte.agencia}>
                                                                    <div className={styles.subtitle}>{transporte.agencia}</div>
                                                                    <ul>{transporte.datos.map(rutas =>
                                                                        <li key={rutas.id} >{'• ' + rutas.li}</li>
                                                                    )}</ul>
                                                                </div>
                                                            )}
                                                        />
                                                    </Modal> : ''
                            }
                        </div>
                        <Explora
                            title={'Explora otros lugares turísticos en ' + post.provincia}
                            province={post.provincia}
                        />
                    </Route>
                )}
            </Layout>
        </>
    )
}

export default Single