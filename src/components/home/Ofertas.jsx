import React from 'react'
import styles from './ofertas.module.scss'
// import Card from 'components/general/card/Card'
import H2 from 'components/general/h2/H2'
import Tag from 'components/general/tag/Tag'
import Button from 'components/general/button/Button'
import Card from 'components/general/card/Card'

const tags = [
    { name: "Mostrar Todo"},
    { name: "Naturaleza"},
    { name: "Gastronomía"},
    { name: "Caminatas"},
    { name: "Cultural"},
    { name: "Música y danza"},
]

const Ofertas = () => {
    return (
        <div>
            <H2 title="Conoce nuevas experiencias" />
            <div className={styles.tag}>
                {tags.map( tags =>
                    <Tag title={tags.name} />
                )}
            </div>
            <div className={styles.card_wrapper}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Button/>
        </div>
    )
}

export default Ofertas
