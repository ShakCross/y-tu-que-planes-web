import React from 'react'
import styles from './panel.module.scss'

const Panel = ({left, right, li_left, li_right}) => {
    return (
        <>
            {
                left ? 
                <div className={styles.wrapper_left}>
                    <div className={styles.wrapper_content_left}>
                        <div className={styles.title}>
                            ¿Qué hacer?
                        </div>
                        <ul className={styles.ul}>
                                {li_left}
                        </ul>
                    </div>
                </div> : 
                right ?
                <div className={styles.wrapper_right}>
                    <div className={styles.wrapper_content_right}>
                        <div className={styles.title}>
                        ¿Qué servicios encuentro?
                        </div>
                        <ul className={styles.ul}>
                            {li_right}
                        </ul>
                    </div>
                </div> :
                ''
            }
        </>
    )
}

export default Panel
