import React from 'react'
import styles from './main-content.module.scss'

const MainContent = ({children}) => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.inner_wrapper}>
                <div className={styles.spacer}>
                    {children}
                </div>
            </div>
        </section>
    )
}

MainContent.defaultProps = {
    children: '',
};

export default MainContent
