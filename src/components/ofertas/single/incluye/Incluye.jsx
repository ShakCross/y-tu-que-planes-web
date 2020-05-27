import React from "react";
import styles from "./incluye.module.scss";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";
import Text from "components/general/text/Text";
import Slider from "react-slick";
import {
  IconCarTransporte,
  IconCarAlojamiento,
  IconCarAlimentacion,
  IconCarTours,
} from "components/general/icon-card/icon-card.stories.js";

const Incluye = () => {
  const settings = {
    responsive: [
      {
        breakpoint: 999999,
        settings: "unslick",
      },
      {
        breakpoint: 769,
        settings: {
          infinite: true,
          slidesToShow: 1,
          speed: 1000,
          arrows: false,
          autoplay: true,
          adaptiveHeight: true,
          autoplaySpeed: 2000,
          variableWidth: true
        },
      },
    ],
  };

  return (
    <LimitWrapper>
      <Text
        headingLevel="h2"
        content="¿Qué incluye?"
        className={styles.heading}
      />
      <Slider className={styles.icon_card_wrapper} {...settings}>
        <IconCarTransporte />
        <IconCarAlojamiento />
        <IconCarAlimentacion />
        <IconCarTours />
      </Slider>
    </LimitWrapper>
  );
};

export default Incluye;
