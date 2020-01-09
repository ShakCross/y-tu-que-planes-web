import React from 'react'
import styles from './main-content.module.scss'

const MainContent = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.inner__wrapper}>
                <div className={styles.spacer}>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default MainContent
