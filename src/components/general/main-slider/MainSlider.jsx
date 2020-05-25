import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "react-slick";
import styles from "./main-slider.module.scss";
import HeroContent from "components/general/hero-content/HeroContent";

const API = process.env.API;

const MainSlider = () => {
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
    customPaging: (i) => <a className={styles.dots}>{i + 1}</a>,

    appendDots: (dots) => (
      <div
        style={{
          bottom: 60,
          display: "flex",
          justifyContent: "center",
          justifyContent: "flex-end",
          width: "83%",
        }}
      >
        <ul className={styles.dots__ul}>{dots}</ul>
      </div>
    ),
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${API}/slides/`);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className={styles.wrapper}>
        <Slider {...settings}>
          {data.map((post) => (
            <div key={post.id}>
              <HeroContent
                to={post.url}
                chip={post.provincia}
                desc={post.descripcion}
                title={post.titulo}
              />
              <img
                className={styles.slides}
                src={API + post.image.url}
                alt={post.alt}
              />
            </div>
          ))}
        </Slider>
        <div></div>
      </div>
    </div>
  );
};

export default MainSlider;
