import React from 'react'
import styles from './festividades.module.scss'
import Chip from 'components/general/chip/Chip'
import Button from 'components/general/button/Button'
import H2 from 'components/general/h2/H2'
import PlusLink from 'components/general/plus-link/PlusLink'
import Date from 'components/general/date/Date'
import WrapperFest from 'components/general/wrapper-fest/WrapperFest'
import EventTitle from 'components/general/event-title/EventTitle'
import Slider from 'react-slick'
import data from 'data/festividades.json'

const Festividades = () => {

    const settings = {
        responsive: [
            {
                breakpoint: 9999,
                settings: 'unslick',
            },
            {
                breakpoint: 577,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "17%",
                    arrows: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    autoplay: true,
                    speed: 2000,
                    autoplaySpeed: 1500,
                    cssEase: "linear"
                }
            }
        ]
    }

    return (
        <section className={styles.wrapper} >
            <div>
                <H2 title="Próximas Festividades" />
            </div>
            <div className={styles.inner_wrapper}>
                {data.map(post =>
                    <WrapperFest key={post.id}>
                        <Date day={post.dia} month={post.mes} />
                        <a href={post.festividades[0].url} target="_blank" rel="noopener noreferrer">
                            <Chip title={post.festividades[0].provincia} />
                            <EventTitle title={post.festividades[0].titulo} />
                        </a>
                        {post.festividades[1].provincia === "" ?
                            ''
                            :
                            (<a href={post.festividades[1].url} target="_blank" rel="noopener noreferrer">
                                <Chip title={post.festividades[1].provincia} />
                                <EventTitle title={post.festividades[1].titulo} />
                            </a>)
                        }
                        <PlusLink url={post.url} lenght={post.more} />
                    </WrapperFest>
                )}
            </div>
            <div className={styles.show_slider}>
                <Slider {...settings}>
                    {data.map(post =>
                        <WrapperFest key={post.id}>
                            <Date day={post.dia} month={post.mes} />
                            <a href={post.festividades[0].url} target="_blank" rel="noopener noreferrer">
                                <Chip title={post.festividades[0].provincia} />
                                <EventTitle title={post.festividades[0].titulo} />
                            </a>
                            {post.festividades[1].provincia === "" ?
                                ''
                                :
                                (<a href={post.festividades[1].url} target="_blank" rel="noopener noreferrer">
                                    <Chip title={post.festividades[1].provincia} />
                                    <EventTitle title={post.festividades[1].titulo} />
                                </a>)
                            }
                            <PlusLink url={post.url} lenght={post.more} />
                        </WrapperFest>
                    )}
                </Slider>
            </div>
            <Button title="Ver calendario de festividades" xclassname="calendar_button" url="https://www.ytuqueplanes.com/festividades" />
        </section>
    )
}

export default Festividades
