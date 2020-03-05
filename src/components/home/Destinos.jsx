import React, {useState} from 'react'
import styles from './destinos.module.scss'
import data from 'data/destinos.json'
import MainContent from 'components/home/main-content/MainContent'
import Card from 'components/general/card/Card'
import Button from 'components/general/button/Button'
import Text from 'components/general/text/Text'
import Filter from 'components/general/filter/Filter'

const Festividades = () => {

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
                <Text className={styles.heading_santa_destinos} content="Más de 30 actividades para disfrutar la Semana Santa" headingLevel="h1" />
                <Filter />
            </div>
            <div className={styles.wrapper_content}>
                <div className={styles.inner_wrapper_content}>
                    {data.slice(0, showedItems).map(post =>
                        <Card
                            destinos
                            key={post.id}
                            image={post.imagen}
                            title={post.provincia}
                            url={post.url}
                            location={post.provincia}
                        />
                    )}
                </div>
            </div>
            {!hideButton &&
                <Button title="Ver más destinos" click={handleShowMore}/>
            }
        </MainContent>
    )
}

export default Festividades
