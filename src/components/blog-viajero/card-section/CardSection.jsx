import React, { Fragment } from "react";
import styles from "./card-section.module.scss";
import { CardDefaultLg } from "components/general/card/card.stories.js";
import Text from "components/general/text/Text";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Slider from 'react-slick'
import data from "data/blog_element.json";

const CardSection = () => {
  const settings = {
    responsive: [
        {
            breakpoint: 9999,
            settings: 'unslick',
        },
        {
            breakpoint: 992,
            settings: {
                centerMode: true,
                infinite: true,
                centerPadding: "19%",
                slidesToShow: 1,
                speed: 500,
                arrows: false,
                autoplay: true
            }
        }
    ]
}
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <Text className={styles.title} content="Vive nuevas experiencias" />
          <Link className={styles.link} to="/">
            <span className={styles.link_text}>Ver todo</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <Slider className={styles.card_slider} {...settings} >
          {data.map((post) =>
            post.categoria.includes("experiencia") ? (
              <CardDefaultLg
                title={post.titulo}
                province={post.provincia}
                image={post.imagen}
                alt={post.alt}
                slug={post.slug}
                category={post.categoria}
              />
            ) : (
              ""
            )
          )}
        </Slider >
      </div>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <Text className={styles.title} content="Gastronomía" />
          <Link className={styles.link} to="/">
            <span className={styles.link_text}>Ver todo</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className={styles.card_slider}>
          {data.map((post) =>
            post.categoria.includes("gastronomia") ? (
              <CardDefaultLg
                title={post.titulo}
                province={post.provincia}
                image={post.imagen}
                alt={post.alt}
                slug={post.slug}
                category={post.categoria}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <Text className={styles.title} content="Festividades" />
          <Link className={styles.link} to="/">
            <span className={styles.link_text}>Ver todo</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className={styles.card_slider}>
          {data.map((post) =>
            post.categoria.includes("festividad") ? (
              <CardDefaultLg
                title={post.titulo}
                province={post.provincia}
                image={post.imagen}
                alt={post.alt}
                slug={post.slug}
                category={post.categoria}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.head}>
          <Text
            className={styles.title}
            content="Recomendaciones por youtube"
          />
          <Link className={styles.link} to="/">
            <span className={styles.link_text}>Ver todo</span>
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
        <div className={styles.card_slider}>
          {data.map((post) =>
            post.categoria.includes("youtube") ? (
              <CardDefaultLg
                title={post.titulo}
                province={post.provincia}
                image={post.imagen}
                alt={post.alt}
                slug={post.slug}
                category={post.categoria}
              />
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CardSection;
