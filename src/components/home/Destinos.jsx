import React, { useState } from 'react'
import styles from './destinos.module.scss'
import data from 'data/destinos.json'
import MainContent from 'components/home/main-content/MainContent'
import Card from 'components/general/card/Card'
import Button from 'components/general/button/Button'
import Text from 'components/general/text/Text'
import Filter from 'components/general/filter/Filter'

const Destinos = () => {

    const [showedItems, setNumberOfItems] = useState(8);
    const [hideButton, setHideButton] = useState(false)

    const dataLenght = data.map(data => data.id)

    const handleShowMore = () => {
        showedItems < dataLenght.length ? setNumberOfItems(showedItems + 8) : '';
        dataLenght.length > dataLenght.length - showedItems ? setHideButton(true) : '';
    }

    const [tags, setTags] = useState('')

    const handleFilterTodos = () => {
        setTags('')
    }

    const handleFilterNorte = () => {
        setTags('Norte')
    }

    const handleFilterCentro = () => {
        setTags('Centro')
    }

    const handleFilterSur = () => {
        setTags('Sur')
    }

    const filterTags = tags === '' ? x => x.tag : x => x.tag === tags

    return (
        <MainContent>
            <div className={styles.wrapper_text}>
                <Text 
                    className={styles.heading_santa_destinos} 
                    content="Más de 30 actividades para disfrutar la Semana Santa" 
                    headingLevel="h1" 
                />
                <Filter 
                    filter1={handleFilterTodos} 
                    filter2={handleFilterNorte} 
                    filter3={handleFilterCentro} 
                    filter4={handleFilterSur} 
                />
            </div>
            <div className={styles.wrapper_content}>
                <div className={styles.inner_wrapper_content}>
                    {data.filter(filterTags).slice(0, showedItems).map(post =>
                        <Card
                            destinos
                            key={post.id}
                            image={post.imagen}
                            title={post.provincia}
                            url={post.url}
                            location={post.provincia}
                            tag={post.tag}
                        />
                    )}
                </div>
            </div>
            {!hideButton &&
                <Button title="Ver más destinos" click={handleShowMore} />
            }
        </MainContent>
    )
}

export default Destinos
