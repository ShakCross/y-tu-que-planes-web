import React from "react";
import styles from "./blog.module.scss";
import Card from "components/general/card/Card";
import { CardDefault } from "components/general/card/card.stories.js";
import H2 from "components/general/h2/H2";
import Button from "components/general/button/Button";
import MainContent from "components/home/main-content/MainContent";
import CardSlider from "components/general/card-slider/CardSlider";
import data from "data/blog.json";

const Blog = () => {
  return (
    <MainContent>
      <div className={styles.wrapper_text}>
        <H2 title="¿No sabes a dónde ir?" />
        <span className={styles.span}>
          Descubre nuevas ideas de viaje gracias a las recomendaciones de
          nuestros viajeros.
        </span>
        <div>
          <Button
            green
            title="Ir al Blog"
            xclassname="blog_button"
            url="https://www.ytuqueplanes.com/novedades"
          />
        </div>
      </div>
      <div className={styles.wrapper_content}>
        <div className={styles.inner_wrapper_content}>
          {data.map((post) => (
            <CardDefault
              key={post.id}
              image={post.imagen}
              title={post.titulo}
              province={post.localia}
              slug={post.url}
              alt={post.alt}
            />
          ))}
        </div>
      </div>
      <CardSlider>
        {data.map((post) => (
          <CardDefault
            key={post.id}
            image={post.imagen}
            title={post.titulo}
            province={post.localia}
            slug={post.url}
            alt={post.alt}
          />
        ))}
      </CardSlider>
      <Button
        green
        title="Ir al Blog"
        xclassname="blog_button_mobile"
        url="https://www.ytuqueplanes.com/novedades"
      />
    </MainContent>
  );
};

export default Blog;
