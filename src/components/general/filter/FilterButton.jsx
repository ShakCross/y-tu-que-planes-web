import React from 'react'
import styles from './filter.module.scss'

const FilterButton = ({ click, content, active, className, classNameActive }) => {

    return (
        <div onClick={click} className={`${styles[className]} ${active ? styles[classNameActive] : ''}`}>
            {content}
        </div>
    )
}

export default FilterButton
