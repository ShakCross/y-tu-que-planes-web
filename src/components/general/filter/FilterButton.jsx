import React, { useState } from 'react'
import styles from './filter.module.scss'

const FilterButton = ({ children }) => {

//     <ul className={styles.ul} >
//     {
//         tags.map(tag =>
//             <li onClick={handleIsActive} key={tag} className={`${styles.li} ${isActive ? styles.is_active : ''}`}>
//                 {tag}
//             </li>
//         )
//     }
// </ul>
    const [isActive, setIsActive] = useState(false)

    const handleIsActive = () => {
        setIsActive(!isActive)
    }

    return (
        
            <li onClick={handleIsActive} className={`${styles.li} ${isActive ? styles.is_active : ''}`}>
                {children}
            </li>
       
    )
}

export default FilterButton
