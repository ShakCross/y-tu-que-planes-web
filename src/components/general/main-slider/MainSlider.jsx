import React, { Component } from "react";
import Slider from "react-slick";
import styles from './main-slider.module.scss'
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeroContent from 'components/general/hero-content/HeroContent'

export default class MainSlider extends Component {
    constructor(props) {
        super(props);
        this.play = this.play.bind(this);
        this.pause = this.pause.bind(this);
    }
    play() {
        this.slider.slickPlay();
    }
    pause() {
        this.slider.slickPause();
    }
    render() {
        const settings = {
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
                            {/* <button className={styles.button} onClick={this.play}>
                                <FontAwesomeIcon icon={faPlay} />
                            </button> */}
                            <button className={styles.button} onClick={this.pause}>
                                <FontAwesomeIcon icon={faPause} />
                            </button>
                        </div>
                    </ul>
                </div>
            ),
            // responsive: [
            //     {
            //         breakpoint: 577,
            //         settings: {
            //             dots: true,
            //             infinite: true,
            //             speed: 2000,
            //             slidesToShow: 1,
            //             slidesToScroll: 1,
            //             adaptiveHeight: true,
            //             arrows: false,
            //             autoplay: true,
            //         }
            //     }
            // ]
        };
        return (
            <div>
                <div className={styles.wrapper}>
                    <Slider ref={slider => (this.slider = slider)} {...settings}>
                        <div>
                            <HeroContent />
                            <img className={styles.slides} src="https://i.picsum.photos/id/1002/4312/2868.jpg" alt="" />
                        </div>
                        <div>
                            <HeroContent />
                            <img className={styles.slides} src="https://i.picsum.photos/id/100/2500/1656.jpg" alt="" />
                        </div>
                        <div>
                            <HeroContent />
                            <img className={styles.slides} src="https://i.picsum.photos/id/1000/5626/3635.jpg" alt="" />
                        </div>
                        <div>
                            <HeroContent />
                            <img className={styles.slides} src="https://i.picsum.photos/id/1001/5616/3744.jpg" alt="" />
                        </div>
                    </Slider>
                </div>
            </div>
        );
    }
}