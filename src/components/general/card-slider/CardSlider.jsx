import React from 'react'
import styles from './card-slider.module.scss'
import Slider from "react-slick";

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
                breakpoint: 400,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "12%",
                    slidesToShow: 1,
                    speed: 500,
                    arrows: false,
                    autoplay: true
                }
            },
            {
                breakpoint: 343,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "10%",
                    slidesToShow: 1,
                    speed: 500,
                    arrows: false,
                    autoplay: true
                }
            },
            {
                breakpoint: 330,
                settings: {
                    className: "center",
                    centerMode: true,
                    infinite: true,
                    centerPadding: "12%",
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

CardSlider.defaultProps = {
    children: '',
};


export default CardSlider
