import React from "react";
import styles from "./icon-card.module.scss";
import Text from "components/general/text/Text";

const IconCard = ({ children, title, textClassName, icon, alt }) => {
  return (
    <div className={styles.wrapper}>
      <img src={icon} alt={alt} />
      <Text headingLevel="h3" content={title} className={textClassName} />
      {children}
    </div>
  );
};

export default IconCard;
