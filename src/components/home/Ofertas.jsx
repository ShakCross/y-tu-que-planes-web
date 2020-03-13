import React, { useState, useRef, useEffect } from 'react'
import styles from './ofertas.module.scss'
import MainContent from 'components/home/main-content/MainContent'
import Card from 'components/general/card/Card'
import Button from 'components/general/button/Button'
import Text from 'components/general/text/Text'
import data from 'data/ofertas.json'
import axios from 'axios';


const Ofertas = () => {

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

    // const prov = ["Ancash", "Arequipa", "Ayacucho", "Cajamarca", "Cusco", "Cusco", "Ica", "Junin", "Lima", "Loreto", "Madre de Dios", "Piura", "San Martin", "Tacna", "Tacna"]
    const provArray = data.map( i => i.pronvincia)
    const prov = provArray.filter((v,i) => provArray.indexOf(v) == i)
    
    const selectRef = useRef();

    const [filterProvince, setFilterProvince] = useState(false)
    const handleFilterProvince = () => setFilterProvince ({filterProvince:true})

    const filtered = filterProvince ? 
    selectRef.current.value === 'Todos' ? x => x.pronvincia : 
    x => x.pronvincia === selectRef.current.value : x => x.pronvincia

    const [showedItems, setNumberOfItems] = useState(8);
    const [hideButton, setHideButton] = useState(false)

    const dataLenght = data.map(data => data.id)

    const handleShowMore = () => {
        showedItems < dataLenght.length ? setNumberOfItems(showedItems + 8) : '';
        showedItems == dataLenght.length - 8 ? setHideButton(true) : '';
    }

    return (
        <MainContent>
            <div className={styles.wrapper_text}>
                <Text className={styles.heading_santa_ofertas} content="Lorem ipsum dolor sit amet, consectetur" headingLevel="h1" />
                <Text className={styles.subheading_santa_ofertas} content="¿Cuál es tu destino?" headingLevel="h2" />
                <div className={styles.wrapper_select_santa_ofertas}>
                    <select ref={selectRef} className={styles.select_santa_ofertas} onChange={handleFilterProvince}>
                        <option value="Todos">Todos los destinos</option>
                        {prov.map(provincias =>
                            <option
                                key={provincias}
                                value={provincias}
                            >
                                {provincias}
                            </option>
                        )}
                    </select>
                </div>
            </div>
            <div className={styles.wrapper__content}>
                <div className={styles.inner_wrapper__content}>
                    {data.filter(filtered).slice(0, showedItems).map(post =>
                        <Card
                            shadow
                            key={post.id}
                            image={'https://landings.hww-dev.com/assets/' + post.imagen}
                            title={post.titulo}
                            price={post.precio_promocion}
                            before={post.precio_real}
                            url={post.url}
                            duration={post.duracion}
                            alt={post.alt}
                        />
                    )}
                </div>
            </div>
            {!hideButton &&
                <Button title="Ver más ofertas" purple click={handleShowMore}/>
            }
        </MainContent>
    )
}

export default Ofertas
