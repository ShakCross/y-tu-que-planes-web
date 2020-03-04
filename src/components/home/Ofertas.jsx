import React, { useState, useRef } from 'react'
import styles from './ofertas.module.scss'
import MainContent from 'components/home/main-content/MainContent'
import Card from 'components/general/card/Card'
import Button from 'components/general/button/Button'
import Text from 'components/general/text/Text'
import data from 'data/ofertas.json'


const Ofertas = () => {

    const prov = ["Amazonas", "Cajamarca", "Cerro de Pasco", "Cusco", "Huánuco", "Junín", "Piura"]

    const selectRef = useRef();

    const [filterProvince, setFilterProvince] = useState(false)
    const handleFilterProvince = () => setFilterProvince ({filterProvince:true})

    const filtered = filterProvince ? 
    selectRef.current.value === 'Todos' ? x => x.provincia : 
    x => x.provincia === selectRef.current.value : x => x.provincia

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
                            image={post.imagen}
                            title={post.titulo}
                            price={post.precio}
                            before={post.antes}
                            url={post.url}
                            duration={post.duration}
                        />
                    )}
                </div>
            </div>
            {!hideButton &&
                <Button title="Ver más ofertas" purple click={handleShowMore} xclassname="wrapper_exp" />
            }
        </MainContent>
    )
}

export default Ofertas
