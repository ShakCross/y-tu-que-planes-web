import React from 'react'
import styles from './rating.module.scss'
import { faStar as fasFaStar } from '@fortawesome/free-solid-svg-icons'
import { faStar as farFaStar } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Rating = ({ stars }) => {

    const icons = []

    let iconEmpty
    for (iconEmpty = 0; iconEmpty < stars; iconEmpty++) {
        icons.push(<FontAwesomeIcon key={icons} className={styles.icon} icon={fasFaStar}/>)
    }
    
    let iconFilled
    for (iconFilled = 0; iconFilled < 5-stars; iconFilled++) {
        icons.push(<FontAwesomeIcon key={icons} className={styles.icon} icon={farFaStar}/>)
    }

    return (
        <div className={styles.wrapper}>
            {icons}
        </div>
    )
}

Rating.defaultProps = {
    stars: '5'
};

export default Rating

// const Rating = ({ stars }) => {

//     const icons = []

//     let iconEmpty
//     for (iconEmpty = 0; iconEmpty < stars; iconEmpty++) {
//         icons.push(<FontAwesomeIcon key={iconEmpty++} className={styles.icon} icon={fasFaStar}/>)
//       }

//     let iconFilled
//     for (iconFilled = 0; iconFilled < 5-stars; iconFilled++) {
//         icons.push(<FontAwesomeIcon key={iconEmpty++} className={styles.icon} icon={farFaStar}/>)
//       }

//     return (
//         <div className={styles.wrapper}>
//             {icons}
//         </div>
//     )
// }

// Rating.defaultProps = {
//     stars: 5
// };
