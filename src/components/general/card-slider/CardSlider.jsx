import React from 'react'
import styles from './card-slider.module.scss'
import Slider from "react-slick";
import Card from 'components/general/card/Card'

const CardSlider = ({children}) => {

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
                    centerPadding: "19%",
                    slidesToShow: 1,
                    speed: 500,
                    arrows: false,
                    autoplay: true
                }
            },
            {
                breakpoint: 470,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "8%",
                    slidesToShow: 1,
                    speed: 500,
                    arrows: false,
                    autoplay: true
                }
            }
        ]
    }

    return (
        <div className={styles.show_slider}>
            <Slider {...settings}>
                {children}
            </Slider>
        </div>
    )
}

export default CardSlider
