import React from 'react'
import Layout from 'components/layout/Layout'
import Hero from 'components/home/Hero'
import Explora from 'components/single/Explora'
import Card from 'components/single/card/Card'
import clock from 'assets/img/clock.svg'
import bulb from 'assets/img/bulb.svg'
import sun from 'assets/img/sun.svg'
import pin from 'assets/img/pin.svg'
import phone from 'assets/img/phone.svg'
import image from 'assets/img/img.png'
import styles from './single.module.scss'
import Slider from "react-slick";
import Panel from 'components/single/panel/Panel'
import data from 'data/turismo-lima-interna.json'

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
                    centerPadding: "17%",
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
            <Hero title={data[0].titulo} desc={data[0].subtitulo} image={image} />
            <div className={styles.desc}>
                {data[0].desc}
            </div>
            <div className={styles.panel}>
                <Panel left li_left={data[0].hacer.map(post =>
                    <li key={post.id}>{post.li}</li>
                )} />
                <Panel right li_right={data[0].servicios.map(post =>
                    <li key={post.id}>{post.li}</li>
                )} />
            </div>
            <div className={styles.wrapper}>
                <Card
                    title="Precio y Horario"
                    yellow
                    image={clock}
                    content={data[0].precio.map(post =>
                        <li key={post.id}>{post.li}</li>
                    )}
                />
                <Card
                    title="¿Cómo llegar?"
                    skyblue
                    ruta
                    via={data[0].llegar[0].via}
                    image={pin}
                    content={data[0].llegar[0].rutas.map(post =>
                        <li key={post.id}>{post.li}</li>
                    )}
                />
                <Card
                    title="Clima y Altura"
                    pale_green
                    image={sun}
                    content={data[0].clima.map(post =>
                        <li key={post.id}>{post.li}</li>
                    )}
                />
                <Card
                    title="Tips de viaje"
                    purple
                    image={bulb}
                    content={data[0].tips.map(post =>
                        <li key={post.id}>{post.li}</li>
                    )}
                />
                <Card
                    title="Contactar con agencias"
                    green
                    contacto
                    image={phone}
                    via="Terrestre"
                    content={data[0].llegar[0].rutas.map(post =>
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
                        content={data[0].precio.map(post =>
                            <li key={post.id}>{post.li}</li>
                        )}
                    />
                    <Card
                        title="¿Cómo llegar?"
                        skyblue
                        ruta
                        via="Terrestre"
                        image={pin}
                        content={data[0].llegar[0].rutas.map(post =>
                            <li key={post.id}>{post.li}</li>
                        )}
                    />
                    <Card
                        title="Clima y Altura"
                        pale_green
                        image={sun}
                        content={data[0].clima.map(post =>
                            <li key={post.id}>{post.li}</li>
                        )}
                    />
                    <Card
                        title="Tips de viaje"
                        purple
                        image={bulb}
                        content={data[0].tips.map(post =>
                            <li key={post.id}>{post.li}</li>
                        )}
                    />
                    <Card
                        title="Contactar con agencias"
                        green
                        contacto
                        image={phone}
                    />
                </Slider>
            </div>
            <Explora
                title={'Explora otros lugares turísticos ' + data[0].provincia}
                province={data[0].provincia}
            />
        </Layout>
    )
}

export default Single