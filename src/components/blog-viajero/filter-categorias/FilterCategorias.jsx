import React from "react";
import styles from "./filter-categorias.module.scss";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";
import Text from "components/general/text/Text";
import { BlogFilter } from "components/general/button/button.stories.js";
import { faEdit, faFilm } from "@fortawesome/free-solid-svg-icons";

const FilterCategorias = () => {
  return (
    <LimitWrapper>
      <div className={styles.wrapper}>
        <Text className={styles.title} content="Mostrar: " />
        <BlogFilter yellow content="Noticias" icon={faEdit}/>
        <BlogFilter green content="Videos" icon={faFilm}/>
      </div>
    </LimitWrapper>
  );
};

export default FilterCategorias;
