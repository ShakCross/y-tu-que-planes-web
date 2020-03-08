import React, { useState, useEffect, Children } from 'react'
import styles from './filter.module.scss'

const FilterButton = ({ click, content, active }) => {

    return (
        <div onClick={click} className={`${styles.li} ${active ? styles.is_active : ''}`}>
            {content}
        </div>
    )
}

export default FilterButton
