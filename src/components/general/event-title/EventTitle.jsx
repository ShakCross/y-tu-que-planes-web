import React from 'react'
import styles from './event-title.module.scss'


const EventTitle = ({title}) => {
    return (
        <div className={styles.wrapper}>
            <p>{title}</p>
        </div>
    )
}

EventTitle.defaultProps = {
    title: 'Feria Internacional del Señor Cautivo de Ayabaca 2019',
};

export default EventTitle
