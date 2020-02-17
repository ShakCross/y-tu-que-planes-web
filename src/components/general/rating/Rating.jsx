import React from 'react'
import styles from './rating.module.scss'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ stars }) => {

    let arr = [1, 2, 3, 4, 5]

    return (
        <div className={styles.wrapper}>
            {arr.map(post =>
                <>
                    <FontAwesomeIcon key={post} className={styles.icon} icon={stars === '2' ? fasFaStar * 2 : farFaStar} />
                </>
            )}
        </div>
    )
}

Rating.defaultProps = {

};

export default Rating
