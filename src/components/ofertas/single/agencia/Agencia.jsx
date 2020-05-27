import React from "react";
import styles from "./agencia.module.scss";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";
import Text from "components/general/text/Text";
import { OfertasSingleGreenButton } from "components/general/button/button.stories.js";
import img from "assets/img/ofertas-single/img_2.png";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Agencia = () => {
  return (
    <LimitWrapper>
      <Text
        headingLevel="h2"
        content="¡Qué esperas! Solicita esta oferta vive una nueva aventura"
        className={styles.heading}
      />
      <OfertasSingleGreenButton />
      <div className={styles.card_hero}>
        <div className={styles.left_content}>
          <img className={styles.img} src={img} alt="img-alt" />
          <div className={styles.left_wrapper_absolute}>
            <div className={styles.left_wrapper}>
              <Text className={styles.left_title} content="Sobre la agencia" />
              <div className={styles.left_inner_wrapper}>
                <div className={styles.shadow}></div>
                <div className={styles.left_inner_content}>
                  <Text
                    className={styles.left_inner_content_title}
                    content="Cañon Explorer"
                  />
                  <div className={styles.left_inner_content_likes}>
                    <FontAwesomeIcon icon={faThumbsUp} />
                    <Text
                      content="123 personas lo recomiendan"
                    />
                  </div>
                  <Text
                    className={styles.left_inner_content_link}
                    content="Ir a la web >"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.right_content}>
          <Text
            headingLevel="h6"
            content="Condiciones"
            className={styles.right_title}
          />
          <Text
            content="El costo del paquete es por persona exonerado del IGV por la ley de la Amazonia. Niños de 0 a 4 años no pagan siempre y cuando compartan el servicio con sus padres, todo gasto ocasionado por el niño será cubierto por sus padres. Niños de 5 a 12 años tienen un 10 % de descuento. Para Temporada alta (Semana Santa, del 20 de julio al 20 de agosto y año nuevo) el costo se incrementa en un 15%."
            className={styles.right_description}
          />
        </div>
      </div>
    </LimitWrapper>
  );
};

export default Agencia;
