import React from 'react'
import styles from './header-noticias.module.scss'
import Card from 'components/general/card/Card'
// import Card from 'components/header/header-noticias/card/Card'

const HeaderNoticias = ({ xclassname }) => {
    return (
        <>
            <div className={`${styles.wrapper}  ${styles[xclassname]}`}>
                <Card header image="https://i.picsum.photos/id/1000/1000/1100.jpg" />
            </div>
            <div className={`${styles.background}  ${styles[xclassname]}`}></div>
        </>
    )
}

export default HeaderNoticias
