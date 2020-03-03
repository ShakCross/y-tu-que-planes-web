import React from 'react'
import styles from './chip.module.scss'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Chip = ({ location }) => {
    return (
            <div className={styles.wrapper_chip}>
                <div className={styles.chip}>
                    <FontAwesomeIcon className={styles.icon} icon={faMapMarkerAlt} />
                    <h6 className={styles.title}> {location} </h6>
                </div>
            </div>
    )
}

Chip.defaultProps = {
    location: 'Lima'
};

export default Chip
