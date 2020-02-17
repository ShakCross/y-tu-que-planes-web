import React from 'react'
import styles from './header-noticias.module.scss'
import Card from 'components/general/card/Card'
// import Card from 'components/header/header-noticias/card/Card'
import data from 'data/noticias.json'

const HeaderNoticias = ({ xclassname, clicked }) => {

    return (
        <>
            <div className={`${styles.wrapper}  ${styles[xclassname]}`}>
                {data.map(post =>
                    <Card 
                    header
                    key={post.id}  
                    image={post.imagen} 
                    title={post.titulo.substr(0, 50) + "..."} 
                    alt={post.alt} 
                    stars={post.rating}
                    />
                )}
            </div>
            <div className={`${styles.background}  ${styles[xclassname]}`} onClick={clicked}></div>
        </>
    )
}

export default HeaderNoticias
