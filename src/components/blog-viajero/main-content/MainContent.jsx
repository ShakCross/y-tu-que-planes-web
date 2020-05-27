import React from "react";
import CardSection from "components/blog-viajero/card-section/CardSection";
import LimitWrapper from "components/general/limit-wrapper/LimitWrapper";

const MainContent = () => {
  return (
    <LimitWrapper>
      <CardSection title="Vive nuevas experiencias"/>
      {/* <CardSection title="Gastronomía"/>
      <CardSection title="Recomendaciones"/>
      <CardSection title="Festividades"/>
      <CardSection title="Recomendaciones de youtube"/> */}
    </LimitWrapper>
  );
};

export default MainContent;
