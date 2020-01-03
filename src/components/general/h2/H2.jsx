import React from 'react'
import styles from './h2.module.scss'

const H2 = ({title}) => {
    return (
        <h2 className={styles.wrapper}>
            {title}
        </h2>
    )
}
H2.defaultProps = {
    title: 'Heading 2',
};

export default H2
