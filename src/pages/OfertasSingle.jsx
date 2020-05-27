import React from "react";
import Seo from "components/general/seo/Seo";
import Layout from "components/layout/Layout";
import Incluye from "components/ofertas/single/incluye/Incluye";
import Actividades from "components/ofertas/single/actividades/Actividades";
import Agencia from "components/ofertas/single/agencia/Agencia";
import { HeroOfertasSingle } from "components/general/hero/hero.stories.js";

const Main = () => {
  return (
    <Layout>
      <Seo
        title="Y tú qué planes? | Turismo y Viajes Perú"
        desc="Turismo, ofertas de viaje por semana santa en Perú | Y tú qué planes? "
        canonical="https://www.ytuqueplanes.com"
        ogTitle="Y tú qué planes? - Turismo y Viajes Perú"
        ogDesc="¡Conoce el Perú! Te invitamos a que viajes y descubras los destinos, actividades y planes en el Perú que aún no conoces."
        ogUrl="https://www.ytuqueplanes.com/"
        ogImage="https://www.ytuqueplanes.com/images/ytqp-share2.jpg"
        hashTag="@ConoceelPeru"
      />
      <HeroOfertasSingle />
      <Incluye />
      <Actividades />
      <Agencia />
    </Layout>
  );
};

export default Main;
