import React, { Fragment } from "react";
import styles from "./card-section.module.scss";
import { CardDefaultLg } from "components/general/card/card.stories.js";
import Text from "components/general/text/Text";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import data from "data/blog_element.json";

const CardSection = ({ title }) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <Text className={styles.title} content={title} />
        <Link className={styles.link} to="/">
          <span className={styles.link_text}>Ver todo</span>
          <FontAwesomeIcon icon={faChevronRight} />
        </Link>
      </div>
      {data.map((post) => (
        <CardDefaultLg
          title={post.titulo}
          province={post.provincia}
          image={post.imagen}
          alt={post.alt}
          slug={post.slug}
          category={post.categoria}
        />
      ))}
    </div>
  );
};

export default CardSection;
