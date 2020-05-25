import React, {useEffect, useState} from "react";
import styles from "./header-noticias.module.scss";
import Card from "components/general/card/Card";
import axios from 'axios';

const API = process.env.API;

const HeaderNoticias = ({ xclassname, clicked }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${API}/noticias/`);
      setData(result.data);
    };
    fetchData();
  }, []);

  return (
    <>
      <div className={`${styles.wrapper}  ${styles[xclassname]}`}>
        {data.map((post) => (
          <Card
            header
            key={post.id}
            image={API + post.image.url}
            title={post.titulo}
            location={post.provincia}
            url={post.url} 
            alt={post.alt} 
          />
        ))}
      </div>
      <div
        className={`${styles.background}  ${styles[xclassname]}`}
        onClick={clicked}
      ></div>
    </>
  );
};

export default HeaderNoticias;
