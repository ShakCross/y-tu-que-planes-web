import React, { useState, useCallback } from "react";
import styles from "./actividades.module.scss";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";
import Text from "components/general/text/Text";
import Slider from "react-slick";
import img from "assets/img/single-img.jpg";
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Actividades = () => {
  const SampleNextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <FontAwesomeIcon
        className={styles.prevArrow}
        style={{ ...style }}
        onClick={onClick}
        icon={faChevronRight}
      />
    );
  };

  const SamplePrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <FontAwesomeIcon
        className={styles.nextArrow}
        style={{ ...style }}
        onClick={onClick}
        icon={faChevronLeft}
      />
    );
  };

  const settings = {
    dots: true,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    dotsClass: styles.slider_dots,
    customPaging: (i) => <a className={styles.slider_dot}>{i + 1}</a>,
    appendDots: (dots) => (
      <div>
        {/* <ul className={styles.slider_dots}>
          {dots}
          <button>Pause</button>
        </ul> */}
        {dots}
      </div>
    ),
  };

  return (
    <LimitWrapper>
      <Text
        headingLevel="h2"
        content="Actividades"
        className={styles.heading}
      />
      <Text
        className={styles.description}
        content="Visita el Bosque de las Cataratas Gigantes, donde descubrirás la magia de la selva y los bosques, con senderos ancestrales, ruinas chachapoyas y cataratas espléndidas."
      />
      <div className={styles.content_wrapper}>
        <Slider {...settings} className={styles.slider}>
          <img src={img} alt="img-alt" />
          <img src={img} alt="img-alt" />
          <img src={img} alt="img-alt" />
          <img src={img} alt="img-alt" />
        </Slider>
        <div className={styles.data_wrapper}>
          <p className={styles.li}>
            <span className={styles.dot}>•</span>Recojo del hotel o alojamiento
            y traslado a Cuispes en servicio privado.
          </p>
          <p className={styles.li}>
            <span className={styles.dot}>•</span>Registro en el puesto de
            control de la comunidad para ingresar al Bosque de las Cataratas
            Gigantes.
          </p>
          <p className={styles.li}>
            <span className={styles.dot}>•</span>Trekking por el Bosque de las
            Cataratas Gigantes.
          </p>
          <p className={styles.li}>
            <span className={styles.dot}>•</span>Almuerzo box lunch.
          </p>
          <p className={styles.li}>
            <span className={styles.dot}>•</span>Retorno al punto de inicio y
            vuelta a Cuispes.
          </p>
          <p className={styles.li}>
            <span className={styles.dot}>•</span>Traslado a sus hoteles o
            alojamientos o a cualquier punto de interés.
          </p>
        </div>
      </div>
    </LimitWrapper>
  );
};

export default Actividades;
