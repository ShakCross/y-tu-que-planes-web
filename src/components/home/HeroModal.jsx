import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FetchExam = () => {

  const url = 'https://landings.hww-dev.com/api/ofertas'
  const token = 'vr7oug6VVPgeFDGfvvunAgsdNagb5ejbfHA5bDYyGyaLnrTs4AxnHmxVZc2B'
  
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
        const result = await axios({
            method: 'GET',
            url: url,
            headers: { Authorization: "Bearer " + token }
        });
        setData(result.data);
      }
      fetchApi(); 
  }, []);
  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>
          <a href={item.url}>
            <h1>{item.titulo}</h1>
            <h2>{item.pronvincia}</h2>
            <img src={'https://landings.hww-dev.com/assets/' + item.imagen} alt={item.alt} srcset=""/>
            <ul>
                <li>{item.precio_promocion}</li>
                <li>{item.precio_real}</li>
            </ul>
            <h4>{item.duracion}</h4>
          </a>
        </li>
      ))}
    </ul>
  );
}
export default FetchExam;