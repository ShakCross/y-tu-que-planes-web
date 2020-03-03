import React from 'react'
import styles from './header-noticias.module.scss'
import Card from 'components/general/card/Card'
import data from 'data/noticias.json'
import Slider from 'react-slick'

const HeaderNoticias = ({ xclassname, clicked }) => {

    const settings = {
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    infinite: true,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 200,
                    centerMode: true,
                    centerPadding: "10%",
                    autoPlay: true
                }
            },
            {
                breakpoint: 500,
                settings: {
                    infinite: true,
                    arrows: false,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    speed: 200,
                    centerMode: true,
                    centerPadding: "7%",
                    autoPlay: true
                }
            },
            {
                breakpoint: 470,
                settings: {
                    infinite: true,
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    speed: 200,
                    centerMode: true,
                    centerPadding: "19%",
                    autoPlay: true
                }
            }
        ]
    }

    return (
        <>
            <div className={`${styles.wrapper}  ${styles[xclassname]}`}>
                <div className={styles.date_wrapper}>
                    <div className={styles.date}>
                        Última publicación: 13 de Noviembre 2019
                    </div>
                </div>
                <div className={styles.inner_wrapper}>
                    <div className={styles.inner_wrapper_content}>
                        {data.map(post =>
                            <Card
                                header
                                key={post.id}
                                image={post.imagen}
                                title={post.titulo.substr(0, 50) + "..."}
                                stars={post.rating}
                                date={post.fecha}
                            />
                        )}
                    </div>
                </div>
                <div className={styles.inner_wrapper_resp}>
                    <Slider {...settings}>
                        {data.map(post =>
                            <Card
                                header
                                key={post.id}
                                image={post.imagen}
                                title={post.titulo.substr(0, 50) + "..."}
                                stars={post.rating}
                                date={post.fecha}
                            />
                        )}
                    </Slider>
                </div>


            </div>
            <div className={`${styles.background}  ${styles[xclassname]}`} onClick={clicked}></div>
        </>
    )
}

export default HeaderNoticias
