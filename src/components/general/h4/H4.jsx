import React from 'react'
import styles from './h4.module.scss'

const H4 = ({title}) => {
    return (
        <div className={styles.wrapper}>
            <h4> {title} </h4>
        </div>
    )
}
H4.defaultProps = {
    title: 'Heading 4',
};

export default H4
