import React from 'react'
import styles from './h5.module.scss'

const H5 = ({ title }) => {
    return (
        <h5 className={styles.wrapper}>
            {title}
        </h5>
    )
}
H5.defaultProps = {
    title: 'Heading 5',
};

export default H5
