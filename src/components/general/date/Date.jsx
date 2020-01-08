import React from 'react'
import styles from './date.module.scss'

const Date = ({day, month}) => {
    return (
        <div>
            <h1 className={styles.day}>
                {day}
            </h1>
            <h4 className={styles.month}>
                {month}
            </h4>
        </div>
    )
}

Date.defaultProps = {
    day: '06',
    month: 'Octubre'
};


export default Date
