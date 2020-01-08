import React from 'react'
import styles from './event-title.module.scss'


const EventTitle = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <p>{children}</p>
        </div>
    )
}

EventTitle.defaultProps = {
    children: 'Feria Internacional del Señor Cautivo de Ayabaca 2019',
};

export default EventTitle
