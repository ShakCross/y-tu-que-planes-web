import React from "react";
import styles from "./noticias.module.scss";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";
import Text from "components/general/text/Text";

const Noticias = () => {
  return (
    <LimitWrapper>
      <div className={styles.wrapper}>
        <Text className={styles.title} content="Noticias" />
      </div>
    </LimitWrapper>
  );
};

export default Noticias;
