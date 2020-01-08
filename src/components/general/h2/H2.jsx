import React from 'react'
import styles from './h2.module.scss'

const H2 = ({ title }) => {
    return (
        <div className={styles.inner__wrapper}>
            <h2 className={styles.wrapper}>
                {title}
            </h2>
        </div>
    )
}
H2.defaultProps = {
    title: 'Heading 2',
};

export default H2
