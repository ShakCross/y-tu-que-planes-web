import React, { useState, useRef, useEffect } from "react";
import Slider from "react-slick";
import styles from './main-slider.module.scss'
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroContent from 'components/general/hero-content/HeroContent'


const MainSlider = () => {

    const [play, setPlay] = useState(false);
    const [pause, setPause] = useState(false);

    const slider = useRef();

    useEffect(() => {
        setPlay(
            play.current,
        ),
        setPause(
            pause.current,
        )
    }, []);

    const handlePlay = () => slider.current.slickPlay();
    const handlePause = () => slider.current.slickPause();

    let settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        customPaging: i => (

            <a className={styles.dots}>
                {i + 1}
            </a>
        ),

        appendDots: dots => (
            <div
                style={{
                    bottom: 60,
                    display: "flex",
                    justifyContent: "center",
                    justifyContent: "flex-end",
                    width: "83%"
                }}
            >
                <ul className={styles.dots__ul}>
                    {dots}
                    <div style={{ textAlign: "center" }} className={styles.button__container}>
                        {play = true ?
                            <button className={styles.button} onClick={handlePause}>
                                <FontAwesomeIcon icon={faPause} />
                            </button>
                            :
                            <button className={styles.button} onClick={handlePlay}>
                                <FontAwesomeIcon icon={faPlay} />
                            </button>
                        }
                    </div>
                </ul>
            </div>
        ),
    };
    return (
        <div>
            <div className={styles.wrapper}>
                <Slider ref={slider => (slider.current = slider)} {...settings}>
                    <div>
                        <HeroContent to="https://ytuqueplanes.com/carnavales-del-peru/" url="https://ytuqueplanes.com/carnavales-del-peru/" chip="Varios" desc="Recorre el Perú y conoce sus carnavales de fiesta en fiesta" title="Carnavales del Perú" />
                        <img className={styles.slides} src="https://www.ytuqueplanes.com/fotos/banners/d-bailarina-ayacucho.jpg" alt="" />
                    </div>
                    <div>
                        <HeroContent to="https://www.ytuqueplanes.com/rutas-cortas" url="https://www.ytuqueplanes.com/rutas-cortas" chip="Lima" desc="Visita estos destinos con los nuevos mapas interactivos" title="Rutas Cortas" />
                        <img className={styles.slides} src="https://www.ytuqueplanes.com/fotos/banners/d-castillo-chancay.jpg" alt="" />
                    </div>
                    <div>
                        <HeroContent to="https://www.ytuqueplanes.com/novedades/183_riete-con-las-ocurrencias-de-stefano-tosso-y-giacomo-benavides-en-cerro-azul" url="https://www.ytuqueplanes.com/novedades/183_riete-con-las-ocurrencias-de-stefano-tosso-y-giacomo-benavides-en-cerro-azul" chip="Lima" desc="Un día en Cerro Azul con Stefano Tosso y Giacomo Benavides" title="Cerro Azul" />
                        <img className={styles.slides} src="https://www.ytuqueplanes.com/fotos/banners/d-sunset-cerro-azul.jpg" alt="" />
                    </div>
                    <div>
                        <HeroContent to="https://www.ytuqueplanes.com/novedades/181_fiesta-de-la-candelaria-tres-danzas-que-te-cautivaran" url="https://www.ytuqueplanes.com/novedades/181_fiesta-de-la-candelaria-tres-danzas-que-te-cautivaran" chip="Puno" desc="Puno brilla con los bailes de la Fiesta de la Virgen de la Candelaria " title="Morenada en la Candelaria" />
                        <img className={styles.slides} src="https://www.ytuqueplanes.com/fotos/banners/d-morenada-en-puno.jpg" alt="" />
                    </div>
                    {/* <div>
                            <HeroContent />
                            <img className={styles.slides} src="https://www.ytuqueplanes.com/fotos/banners/d-iperu.jpg" alt="" />
                        </div> */}
                </Slider>
                <div>

                </div>
            </div>
        </div>
    );
}

export default MainSlider