import React, { useState } from 'react'
import Layout from 'components/layout/Layout'
import Hero from 'components/home/Hero'
import Explora from 'components/single/Explora'
import Card from 'components/single/card/Card'
import clock from 'assets/img/clock.svg'
import bulb from 'assets/img/bulb.svg'
import sun from 'assets/img/sun.svg'
import pin from 'assets/img/pin.svg'
import pinwhite from 'assets/img/pinwhite.svg'
import phone from 'assets/img/phone.svg'
import styles from './single.module.scss'
import Slider from "react-slick";
import Panel from 'components/single/panel/Panel'
import data from 'data/turismo-lima-interna.json'
import { Route } from 'react-router-dom'

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

    return (

        <Layout>
            {data.map(post =>
                <Route key={post.id} exact path={'/' + post.slug}>

                    <Hero title={post.titulo} desc={post.subtitulo} image={post.imagen} breadcrumbs content={post.titulo} slug={post.slug} />
                    <div className={styles.desc}>
                        {post.desc}
                    </div>
                    <div className={styles.panel}>
                        <Panel left li_left={post.hacer.map(post =>
                            <li key={post.id}>{'- ' + post.li}</li>
                        )} />
                        <Panel right li_right={post.servicios.map(post =>
                            <li key={post.id}>{'- ' + post.li}</li>
                        )} />
                    </div>
                    <div className={styles.wrapper}>
                        <Card
                            title="Precio y Horario"
                            yellow
                            image={clock}
                            modalImage={pinwhite}
                            content={post.precio.map(post =>
                                <li key={post.id}>{'• ' + post.li}</li>
                            )}
                        />
                        <Card
                            title="¿Cómo llegar?"
                            skyblue
                            // via={post.llegar[0].via}
                            image={pin}
                            modalImage={pinwhite}
                            content={post.llegar[0].rutas.map(post =>
                                <li key={post.id}>{post.li}</li>
                            )}
                        />
                        <Card
                            title="Clima y Altura"
                            palegreen
                            image={sun}
                            modalImage={pinwhite}
                            content={post.clima.map(post =>
                                <li key={post.id}>{'• ' + post.li}</li>
                            )}
                        />
                        <Card
                            title="Tips de viaje"
                            purple
                            image={bulb}
                            modalImage={pinwhite}
                            content={post.tips.map(post =>
                                <li key={post.id}>{'• ' + post.li}</li>
                            )}
                        />
                        <Card
                            title="Contactar con agencias"
                            green
                            // via={post.contacto[0].agencia}
                            image={phone}
                            modalImage={pinwhite}
                            content={post.contacto[0].datos.map(post =>
                                <li key={post.id}>{post.li}</li>
                            )}
                        />
                    </div>
                    <div className={styles.wrapper_mobile}>
                        <Slider {...settings}>
                            <Card
                                title="Precio y Horario"
                                yellow
                                image={clock}
                                modalImage={pinwhite}
                                content={post.precio.map(post =>
                                    <li key={post.id}>{'• ' + post.li}</li>
                                )}
                            />
                            <Card
                                title="¿Cómo llegar?"
                                skyblue
                                // via={post.llegar[0].via}
                                image={pin}
                                modalImage={pinwhite}
                                content={post.llegar[0].rutas.map(post =>
                                    <li key={post.id}>{post.li}</li>
                                )}
                            />
                            <Card
                                title="Clima y Altura"
                                palegreen
                                image={sun}
                                modalImage={pinwhite}
                                content={post.clima.map(post =>
                                    <li key={post.id}>{'• ' + post.li}</li>
                                )}
                            />
                            <Card
                                title="Tips de viaje"
                                purple
                                image={bulb}
                                modalImage={pinwhite}
                                content={post.tips.map(post =>
                                    <li key={post.id}>{'• ' + post.li}</li>
                                )}
                            />
                            <Card
                                title="Contactar con agencias"
                                green
                                // via={post.contacto[0].agencia}
                                image={phone}
                                modalImage={pinwhite}
                                content={post.contacto[0].datos.map(post =>
                                    <li key={post.id}>{post.li}</li>
                                )}
                            />
                        </Slider>
                    </div>
                    <Explora
                        title={'Explora otros lugares turísticos en ' + post.provincia}
                        province={post.provincia}
                    />
                </Route>
            )}
        </Layout>
    )
}

export default Single