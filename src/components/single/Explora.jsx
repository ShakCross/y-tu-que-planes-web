import React from 'react'
import styles from './explora.module.scss'
import H2 from 'components/general/h2/H2'
import Card from 'components/general/card/Card'
import data from 'data/turismo-lima.json'


const Explora = ({province, title}) => {
    return(
        <>
            <H2 title={title} bree/>
            <div className={styles.card_wrapper}>
                {data.slice(15).map(post =>
                    post.localia === province ?
                    <Card
                        key={post.id}
                        image={post.imagen}
                        location={post.localia}
                        title={post.titulo}
                        slug={post.slug}
                        alt={post.alt}
                    /> : ''
                )}
            </div>
        </>
    )
}

export default Explora
