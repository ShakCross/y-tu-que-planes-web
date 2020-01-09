import React from 'react'
import styles from './chip.module.scss'
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Chip = ({ title, filled }) => {
    return (
        <div className={`${filled ? styles.wrapper : styles.wrapper_no_bg}`}>
            <FontAwesomeIcon className={styles.icon} icon={faMapMarkerAlt} />
            <h6 className={styles.title}>{title}</h6>
        </div>
    )
}

Chip.defaultProps = {
    title: 'Amazonas',
};

export default Chip
