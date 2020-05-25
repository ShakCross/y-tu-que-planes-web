import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./header-notificaciones.module.scss";
import Alert from "components/header/header-notificaciones/alert/Alert";

const API = process.env.API;

const HeaderNotificaciones = ({ xclassname, clicked }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${API}/alertas/`);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={`${styles.wrapper}  ${styles[xclassname]}`}>
        <div className={styles.inner__wrapper}>
          <div className={styles.date_wrapper}>
            <div className={styles.date}>
              Última publicación: 13 de Noviembre 2019
            </div>
            <div className={styles.date}>ALERTAS</div>
          </div>
          <div className={styles.content_wrapper}>
            <div className={styles.alert_wrapper}>
              {data.map((post) => (
                <Alert key={post.id} title={post.titulo} content={post.desc} url={post.url} />
              ))}
            </div>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.holiday_wrapper}
          >
            Feriados 2020 >
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.see_more_wrapper}
          >
            Ver todas las notificaciones
          </a>
        </div>
      </div>
      <div
        className={`${styles.background}  ${styles[xclassname]}`}
        onClick={clicked}
      ></div>
    </>
  );
};

export default HeaderNotificaciones;
